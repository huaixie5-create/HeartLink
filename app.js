function sendMessage(){

    let input=document.querySelector(".input input");

    let text=input.value.trim();

    if(text===""){
        return;
    }


    let chat=document.querySelector(".chat");


    let user=document.createElement("div");

    user.className="msg user";

    user.innerText=text;


    chat.appendChild(user);



    input.value="";


    setTimeout(()=>{


        let ai=document.createElement("div");

        ai.className="msg ai";

        ai.innerText="我听到了，继续和我聊吧 ❤️";


        chat.appendChild(ai);


        chat.scrollTop=chat.scrollHeight;


    },500);


}
