// export const Frame = () => {
//   const currentState = sessionStorage.getItem("src");
//   const frame = document.querySelector("iframe");
//   const initial = "js-homework/00Basic/01-start.html";

//   frame.setAttribute("src", currentState || initial);
// };


export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  const basePath = "/js-homework";
  const initial = "00Basic/01-start.html"; // 상대 경로로 바꿨음

  // 주소 앞에 항상 basePath를 붙여줌
  const fullPath = basePath + (currentState || initial);

  frame.setAttribute("src", fullPath);
};
