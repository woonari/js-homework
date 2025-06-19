/* -------------------------------------------------------------------------- */
/*                                   Return                                   */
/* -------------------------------------------------------------------------- */

/* ----------------------------- return을 사용하는 경우 ---------------------------- */
// 결과값을 반환해야 할 때
const sum = () => {
  const button = document.querySelector(".sum button");
  const resultValue = document.querySelector(".sum p");


  const result = () => {
    const number1 = document.querySelector(".sum .number1");
    const number2 = document.querySelector(".sum .number2");
    
    const value1 = Number(number1.value); 
    const value2 = Number(number2.value);

    return value1 + value2;
  }

  button.addEventListener("click",(e)=>{
      e.preventDefault();

      const sumNumber = result();
      resultValue.textContent = sumNumber;
  });
  
};
sum();

// 조건에 따라 함수 실행을 종료해야 할 때
const message = () => {
  const button = document.querySelector(".message button");
  const input = document.querySelector(".message input");
  const output = document.querySelector(".message p");
  
  button.addEventListener("click",(e)=>{
      e.preventDefault();

      if(input.value.trim() === ""){
        console.log("입력해주세요."); 
        return; //함수를 마무리를 해준다.
        
      }

      output.textContent = input.value;
      console.log("메세지가 발송 되었습니다.");
      
  });  

};
message();

// 절차적인 작업을 수행할 때
// const handleValid = () => {
//   const private = document.querySelector(".private");
//   const inputs = private.querySelectorAll("input");

//   const text1 = document.querySelector(".text1");
//   const email1 = document.querySelector(".email1");
//   const number1 = document.querySelector(".number11");

//   private.addEventListener("submit", (e) => {
//      e.preventDefault();
//     // 전송클릭 후 기능

//     if(text1.value.trim() === ""){
//       console.log("이름을 입력하세요.");
//       return;  
//     }else if(email1.value.trim() === ""){
//       console.log("이메일을을 입력하세요.");
//       return;  
//     }else if(number1.value.trim() === ""){
//       console.log("나이를 입력하세요.");
//       return;  
//     }; 
//   console.log('전송되었습니다.');
//   });
// };

// handleValid();


const handleValid = () => {
  const private = document.querySelector(".private");
  const inputs = private.querySelectorAll("input");

  private.addEventListener("submit", (e) => {
    e.preventDefault();
    // 전송클릭 후 기능  
    let data = {};
    let text = "";

    inputs.forEach((input)=>{
      const value = input.value.trim();
      const name = input.name;

      console.log(name);
      //data[키] = 값;
      data[name] = value;
    });
    console.log(data);
    console.log(text);
  
    if (data.name === "") {
       console.log("이름을 입력하세요.");
       return;
    }

    if (data.email === "") {
       console.log("이메일을을 입력하세요.");
       return;
    }

    if (data.age === "") {
       console.log("나이를 입력하세요.");
       return;
    }

    console.log("회원가입이 완료되었습니다.");

  });
};

handleValid();

/* ------------------------- return을 사용하지 않아도 되는 경우 ------------------------- */
// 이벤트 헨들러 함수를 사용할 때
const myName = () => {
  const button = document.querySelector(".event button");
  const input = document.querySelector(".event input");
};
myName();

// 상태변경할 때
const title = () => {
  const heading = document.querySelector(".change-title");
};
title();

// 콘솔에 로그 출력할 때
const consoleCheck = () => {
  //   console.log(`콘솔메세지 :`);
};
consoleCheck();

// DOM을 조작할 때
const listDOM = () => {
  const lis = document.querySelectorAll(".list li");
};
listDOM();

/* -------------------------------------------------------------------------- */
/*                                    호이스팅                                 */
/* -------------------------------------------------------------------------- */
hellow();

function hellow(){
	console.log('hellowss')
}

// 화살표함수를 사용하면 호이스팅이 일어나지 않는다.


/* -------------------------------------------------------------------------- */
/*                                   호출 스케줄링                              */
/* -------------------------------------------------------------------------- */
/* ------------------------------ setTimeout ----------------------------- */
function showNotification(text) {
  const dialog = document.querySelector("dialog");
  dialog.textContent = text;

  // dialog.show();
  // setTimeout(() => {
  //   dialog.close();
  // }, 1000);

  dialog.show();
  const timeout = setTimeout(() => {
    dialog.close();
  }, 2000);

  return timeout;
}

// 알림 호출
const toast = showNotification("쪽지가 도착했습니다.");
let seconds = 0;
/* ------------------------------- setInterval ------------------------------ */
function updateTimer() {
  const timmer = document.querySelector("#timer");
  timmer.innerText = `Timer : ${seconds++}초`;
}

// 1초마다 타이머 업데이트
//setInterval(실행대상, 1000);
const interval = setInterval(updateTimer, 1000);//변수에 담아서 실행시켜라!

/* ------------------------------ clearTimeout ------------------------------ */
const btnStopToast = document.querySelector(".stop-toast");
btnStopToast.addEventListener("click", () => {
  clearTimeout(toast);
});

/* ------------------------------ clearInterval 반복실행----------------------------- */
const btnStopTimer = document.querySelector(".stop-timer");
btnStopTimer.addEventListener("click", () => {
  clearInterval(interval);
});

/* -------------------------------------------------------------------------- */
/*                                    This                                    */
/* -------------------------------------------------------------------------- */
const user = {
  nickName: "Rebehayan",
  firstName: "Ha",
  lastName: "SungPil",
  age: 30,
    getFullName: function () { //유저의 객체를 찾는다 객체만 조회할때,
      console.log(this);
    },

    getFull() {// 위의 function 축약형
      console.log(this);
    },

    getName: () => { //화살표 함수는 윈도를 찾는다. 부모객체를 찾는다.
      console.log(this);
    },

};

user.getFullName();
user.getName();



/* -------------------------------------------------------------------------- */
/*                                  CallBack                                  */
/* -------------------------------------------------------------------------- */
const hi = (callback) => {
  console.log("함수가 실행되었습니다."); 
  callback("아은하");
}

const isCallback = (name) => {
    console.log(`"${name} 함수가 실행되었습니다."`); 
};

hi(isCallback);
// hi(()=>{ 
//   console.log("callback 함수가 실행되었습니다."); 
// });



