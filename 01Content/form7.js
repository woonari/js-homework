//추천아이디 확인 : #message에 비어있을경우 경고메시지 넣기, 추천아이디값이 있을경우 메세지 출력
const btn = document.querySelector(".recommend");
const message = document.querySelector("#message");
const idValue = document.querySelector("#txt7_2_1");

btn.addEventListener("click",()=>{

    idValue.setAttribute("type", "text");
    const value = idValue.value.trim(); 

    if (value) { 
        message.textContent = `${value} 추천되었다!`;
        message.style.color = "gray";
    } else {
        message.textContent = `추천아이디를 입력하라!!`;
        message.style.color = "red";
    }
});


