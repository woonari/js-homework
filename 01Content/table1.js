 // 이름개수, 이름.length
 // 맨 아래 안내 문구 제외

//const count = document.querySelector(".count");
//const lis = document.querySelectorAll(".table-type1 tbody tr");
//console.log(lis.length);

//count.textContent =`현재게시물 ${lis.length -1}개`;


const boardData = [
  {
    no:0,
    category: "보상",
    group: "수도권",
    title: "한강하류권(1차)",
    file: true,
    writer : "박종환",
    data: "2025-05-05",
    hit:14,
  },
  {
    no:1,
    category: "추심",
    group: "경기",
    title: "한강하류권(2차)",
    file: true,
    writer : "홍길동",
    data: "2025-05-05",
    hit:54654,
  }, 
  {
    no:3,
    category: "보상",
    group: "인천",
    title: "한강하류권(3차)",
    file: true,
    writer : "팀장",
    data: "2025-05-05",
    hit:5534,
  },    
];

//console.log(boardData.length);

const board = document.querySelector(".table-type1 tbody");
const lis = document.querySelectorAll(".table-type1 tbody tr");
const count = document.querySelector(".count");


count.textContent =`현재게시물 ${boardData.length}개`;

if(boardData.length === 0 ){
    board.innerHTML =
    `
    <tr>
      <td colspan="8">현재 게시물이 존재하지 않습니다</td>
    </tr>
    `;
}else{
    const result = boardData.map((items)=>{
        const {no,category,group,title,file,writer,data,hit} = items;
        return`
              <tr>
                <td>${no}</td>
                <td>${category}</td>
                <td>${group}</td>
                <td>
                  <a href="">${title}</a>
                </td>
                <td>
                  <!-- <a href="">${file}</a> -->
                  <a href="">${file ? '<img src="./images/ico_file.svg" alt="" />' : "-"}</a>
                </td>
                <td>${writer}</td>
                <td>${data}</td>
                <td>${hit}</td>
              </tr>
        `;
    });
    console.log(result);
    board.innerHTML = result.join("");
}

//삼항연산
// 조건 ? 참 : 거짓; <a href="">${file ? '<img src="./images/ico_file.svg" alt="" />' : "-"}</a>

//  ${hit.toLocaleString()} 3자리수마다 쉼표찍힘!

// 선생님 작성
// const boardData = [
//   {
//     no: 0,
//     category: "보상",
//     group: "수도권수도건설단",
//     title: "한강하류권(3차)급수체계조정사업(우선시행구간) 수도권수도건설단 사업 최초 시행구간",
//     file: true,
//     writer: "박종환",
//     date: "2025-05-05",
//     hit: 1234,
//   },
//   {
//     no: 1,
//     category: "기타",
//     group: "광주전남지역본부",
//     title: "[장흥수도관리단]관로시설 긴급 복구 협력업체 지원 사업",
//     file: true,
//     writer: "박종환",
//     date: "2025-05-05",
//     hit: 5,
//   },
//   {
//     no: 2,
//     category: "기타",
//     group: "경남부산지역본부",
//     title: "[장흥수도관리단]관로시설 긴급 복구",
//     file: false,
//     writer: "관리자",
//     date: "2025-05-05",
//     hit: 12,
//   },
// ];

// const table = document.querySelector(".table-type1");
// const tbody = table.querySelector("tbody");
// const count = document.querySelector(".count");
// count.textContent = `현재게시물 ${boardData.length}개`;

// if (boardData.length === 0) {
//   tbody.innerHTML = `
//     <tr>
//         <td colspan="8">현재 게시물이 존재하지 않습니다.</td>
//     </tr>
//     `;
// } else {
//   tbody.innerHTML = boardData
//     .map((item) => {
//       const { category, date, file, group, hit, no, title, writer } = item;
//       return /*html */ `
//         <tr>
//             <td>${no}</td>
//             <td>${category}</td>
//             <td>${group}</td>
//             <td class="text-left">
//                 <a href="">
//                 ${title}
//                 </a>
//             </td>
//             <td>
//                 <a href="">${file ? '<img src="./images/ico_file.svg" alt="" />' : "-"}</a>
//             </td>
//             <td>${writer}</td>
//             <td>${date}</td>
//             <td>${hit.toLocaleString()}</td>
//         </tr>
//       `;
//     })
//     .join("");
// }
