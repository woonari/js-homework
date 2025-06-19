/* -------------------------------------------------------------------------- */
/*                로그인 버튼 클릭 시 모달 팝업 띄우기 - 1차과제                    */
/* -------------------------------------------------------------------------- */

// 로그인 버튼을 누르면 레이어팝업 띄우기 : **xxx님이 로그인 하셧습니다.**
// const openBtn = document.querySelector(".submit");
// const popupCon = document.querySelector(".popup");
// const closeBtn = document.querySelector(".popup button");

// openBtn.addEventListener("click",(e)=>{
//     e.preventDefault();
//     popupCon.showModal();  

//     const message = document.querySelector("#popup-message");
//     const name = document.querySelector("#txt1_1");

//     name.setAttribute("type","text");

//     const nameValue = name.value.trim();

//     if (nameValue) {
//         message.textContent = `"${nameValue}"님이 로그인 하셨습니다!!`;
//     } else {
//         message.textContent = `정보를 입력하세요`;
//     }

// });

// closeBtn.addEventListener("click",()=>{
//     popupCon.close();  
// });


//X 버튼 클릭 시 텍스트 삭제
// 삭제후 input에 focus 적용이 안됨...
const delBtn = document.querySelectorAll(".btn-del");

delBtn.forEach((btn)=>{
    
    btn.addEventListener("click",()=>{
        const span = btn.closest(".login-form span");
        const input = span.querySelector("input");

        input.value = "";
    });
    
}); 


/* -------------------------------------------------------------------------- */
/*                            유효성검사 - 2차과제                               */
/* -------------------------------------------------------------------------- */
// 절차적인 작업 수행! 리턴/콜백
// 12-function.js 참고 

// 함수바인딩 - 리턴 리턴 - 콜백 -> 팝업메세지 

const loginValid = () => {

    const form = document.querySelector(".login-form");
    const emailInput = form.querySelector("#txt1_1");
    const pwInput = form.querySelector("#txt1_2");
    
    //팝업변수
    const popup = document.querySelector(".popup");
    const message = document.querySelector("#popup-message");
    const closeBtn = popup.querySelector("button");


    form.addEventListener("submit",(e)=>{
        e.preventDefault();

        const email = emailInput.value.trim();
        const pw = pwInput.value.trim();

        if( email === "" ){
            console.log("이메일을 입력해주세요");
            return; 
        }
        if( pw === "" ){
            console.log("비밀번호를 입력해주세요");
            pwInput.focus();
            return; 
        }
        
        console.log("로그인 되었습니다.");

        //팝업메세지
        message.textContent = `"${email}"님이 로그인 하셨습니다!!`;
        popup.showModal();
    
    });

    closeBtn.addEventListener("click",()=>{
        popup.close();  
    });
    
};
loginValid();
 
