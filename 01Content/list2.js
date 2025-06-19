/* -------------------------------------------------------------------------- */
/*                       데이터 바인딩하기 - 2차과제                              */
/* -------------------------------------------------------------------------- */
// 이미지와 링크가 있는 데이터일경우 a태그와 img태그 추가??
// 배열 + 객체 + 객체 데이터로 구성

// table1.js참고
// 객체생성(배열) -> 함수 -> 구조분해할당 ->if/else

const historyData =[
    {
      year: "2020",
      title : "세계 최장비거리 기록, 아토맥스 골프공 개발",
      Description: "국내 최초 무충진 시스템 친환경 인조잔디 개발3",
    },
    {
      year: "2021",
      title : "",
      Description: "",
    },
    {
      year: "2022",
      title : "세계 최장비거리 기록",
      Description: "국내 최초 무충진 시스템 친환경 인조잔디 개발1",
    },
]

//함수 
const history = () => {

  const list = document.querySelector(".history .list");

  if (historyData.length === 0) { // 없을때
    list.innerHTML=`
    <li>
        <div>내용이 없습니다.</div>
    </li>
    `;

  } else { //데이터 없을때 옵셔널! 가상요소 이미지파일???
    list.innerHTML = historyData.map((items)=>{
        const {year,title,Description} = items;
        
        return`
         <li>
            <strong>${year}</strong> 
            <div><a href="">${title || "제목이 없습니다." }</a></div>
            <div>${Description || "내용이 없습니다." }</div>
         </li>    
        `;

    })
    .join("");
  }
}
history();
