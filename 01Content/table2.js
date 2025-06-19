 // 이름개수, 이름.length
 // 게시되는 글에 클래스추가
 
const count = document.querySelector(".count");
const list = document.querySelectorAll(".list");
const container = document.querySelector(".count-box");

count.textContent = `게시글 ${list.length}개`;

//자바스크립트로 스타일 제어해보기
container.style.display = "flex";
container.style.justifyContent = "flex-end";
container.style.marginBottom = "10px";


