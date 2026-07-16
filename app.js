async function sendMessage(){

    let input=document.querySelector(".input input");

    let text=input.value.trim();

    if(text===""){
        return;
    }


    let chat=document.querySelector(".chat");


    //显示用户消息
    let user=document.createElement("div");
    user.className="msg user";
    user.innerText=text;
    chat.appendChild(user);


    input.value="";


    //读取设置
    let api=localStorage.getItem("api");
    let model=localStorage.getItem("model");


    if(!api || !model){

        let ai=document.createElement("div");
        ai.className="msg ai";
        ai.innerText="请先在设置里填写API和模型";
        chat.appendChild(ai);
        return;

    }



    let ai=document.createElement("div");
    ai.className="msg ai";
    ai.innerText="正在思考...";
    chat.appendChild(ai);



    try{

        let res=await fetch(
            "你的API地址/v1/chat/completions",
            {
                method:"POST",

                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+api
                },


                body:JSON.stringify({

                    model:model,

                    messages:[

                        {
                            role:"system",
                            content:"你是林晚，一个温柔的聊天角色。"
                        },

                        {
                            role:"user",
                            content:text
                        }

                    ]

                })

            }
        );


        let data=await res.json();


        ai.innerText=
        data.choices[0].message.content;


    }catch(e){

        ai.innerText=
        "连接失败："+e.message;

    }


}
return;

}




//等待提示

let loading=document.createElement("div");

loading.className="msg ai";

loading.innerText="正在想你说的话……";

chat.appendChild(loading);



try{


let response=await fetch(

api+"/chat/completions",

{

method:"POST",

headers:{

"Content-Type":"application/json",

"Authorization":"Bearer "+key

},


body:JSON.stringify({

model:model,

messages:[

{

role:"system",

content:"你是林晚，一个温柔的AI恋人。"

},


{

role:"user",

content:text

}

]


})

}

);



let data=await response.json();



loading.remove();



let ai=document.createElement("div");

ai.className="msg ai";


ai.innerText=

data.choices[0].message.content;



chat.appendChild(ai);



}

catch(error){


loading.remove();


let ai=document.createElement("div");


ai.className="msg ai";


ai.innerText=

"连接失败："+error.message;


chat.appendChild(ai);


}



chat.scrollTop=chat.scrollHeight;


}

        chat.appendChild(ai);


        chat.scrollTop=chat.scrollHeight;


    },500);


}
