// 뉴스레터 구독버튼 누르면 경고창 띄우기
//>>> xxx@xxx.com으로 뉴스레터가 신청되었습니다.

const btn = document.querySelector(".newsletter button");
const inputEmail = document.querySelector(".newsletter input");

btn.addEventListener("click",()=>{

    inputEmail.setAttribute('type','text');
    const inputValue = inputEmail.value.trim();

    if (inputValue) {
        alert(`"${inputValue}"으로 뉴스레터가 신청되었습니다`);
    } else {
         alert(`email을 입력해주세요!!!`);
    }
});


