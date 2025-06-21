// 1. custom select css하기
// 2. select  접힘펼침, 텍스트 복제
// 3. list의 top위치 유연하게 넣기
// 4. 콜백함수 넣어보기
// 5. 함수형프로그래밍 해보기

//1. global.js추가
//2. js에서 전체(export) 감싸는 함수

export const CustomSelect = () => {
  const customSelect = document.querySelector(".customSelect");
  const button = customSelect.querySelector("button");

  //1. select 접힘펼침 css에.active 있어야 함,
  button.addEventListener("click", () => {
    //console.log("dd");
    customSelect.classList.toggle("active");
  });

  //2. 텍스트 복제
  const list = customSelect.querySelectorAll("ul li");
  list.forEach((li) => {
    li.addEventListener("click", () => {
      const text = li.textContent;

      button.textContent = text;
      // 1번 열렸던거 닫기
      customSelect.classList.remove("active");
    });
  });
};
