/* -------------------------------------------------------------------------- */
/*                     게시물 갯수 표시하기  - 1차과제                            */
/* -------------------------------------------------------------------------- */
// 이름.length
// 리스트 tr 중 답변 tr제외
// const count = document.querySelector(".table-info span");
// const lis2 = document.querySelectorAll(".table tbody tr");

// count.textContent = `${lis2.length / 2}`;



/* -------------------------------------------------------------------------- */
/*                       데이터 바인딩하기 - 2차과제                              */
/* -------------------------------------------------------------------------- */
// 객체생성 --> 함수 -> 구조분해할당 -> if/else
// table1.js참고


// 객체생성(배열)
const boardData = [
  {
    no : 1,
    category : "주문/결제",
    title : "주문과 결제는 어떻게 하나요?",
    answer : "방식으로진행하기 때문에 철거부터 소요되는 시간은 약 2~3일 정도",
  },
    {
    no : 2,
    category : "상담",
    title : "[상담]견적을 바로 알고싶은데 꼭 실측을 해야 하나요?",
    answer : "부엌은 보통 설치 전달 철거와 타일 작업 후 ",
  },
    {
    no : 3,
    category : "시공/설치",
    title : "[시공/설치]부분으로 공사하게되면 얼마나 걸리나요?",
    answer : "붙박이/빌트인장은 전날 철거하는",
  },
    {
    no : 4,
    category : "결제",
    title : "[시공/설치]전체적인 리모델링 공사는 얼마나 걸리나요?",
    answer : "제품 자체의 설치는 반나절에서 하루정도",
  },
    {
    no : 5,
    category : "A/S",
    title : "[A/S]as기간은 어떻게 되나요?",
    answer : "반나절에서 하루정도 걸립니다.",
  },
]


//함수 - 리턴 - 콜백
const lis = () => {
  const board = document.querySelector(".table tbody");
  const count = document.querySelector(".table-info");

  //게시글 갯수
  count.innerHTML = `자주묻는 질문 전체 <b>${boardData.length}</b>건 입니다`;
  
  //
  if (boardData.length === 0) {
      board.innerHTML=
      `   <tr>
            <td colspan="4">현재 게시물이 존재하지 않습니다</td>
          </tr>
      `;
  } else {
    
    board.innerHTML = boardData.map((items)=>{
      
      const { no,category, title, answer } = items;

      return`
        <tr>
          <td>${no}</td>
          <td>${category}</td>
          <td><button>${title}</button></td>
        </tr>
        <tr>
          <td colspan="3">
            <div class="answer">
              <div>${answer}</div>
            </div>
          </td>
        </tr> 
      `;
    })
    .join("");

  }
}
lis();




//버튼 클릭 시 1)색상 2)내용보이기????
const btns = document.querySelectorAll(".table tbody button");

btns.forEach((btn)=>{
  btn.addEventListener("click",()=>{
      //console.log("???");

      btns.forEach((b)=>{
        b.parentElement.classList.remove("active");
      });

      btn.parentElement.classList.add("active");

  });
  
});
