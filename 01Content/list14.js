const buttons = document.querySelectorAll(".list-type14 button");

buttons.forEach((button)=>{
    button.addEventListener("click",()=>{
        //console.log(button.textContent);  

        const title = document.querySelector(".message h2");
        const messageImg = document.querySelector(".message img");

        //버튼내부 이미지요소 찾고 속성 지정
        const buttonImg = button.querySelector("img");
        const imgSrc = buttonImg.getAttribute("src");

        //적용
        messageImg.setAttribute("src", imgSrc);
        title.textContent = button.textContent;
    });
    
});

