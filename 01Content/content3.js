//구조분해할당
const notice = {
    badge:"우동",
    text:"배달 중인 상품 바로 보기",

}

const {badge,text} = notice

console.log(text);

const green = document.querySelector(".green");
const mart = document.querySelector(".mart");


green.textContent = badge;
mart.textContent = text;