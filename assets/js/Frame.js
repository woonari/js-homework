// export const Frame = () => {
//   const currentState = sessionStorage.getItem("src");
//   const frame = document.querySelector("iframe");
//   const initial = "js-homework/00Basic/01-start.html";

//   frame.setAttribute("src", currentState || initial);
// };


// export const Frame = () => {
//   const currentState = sessionStorage.getItem("src");
//   const frame = document.querySelector("iframe");
//   const basePath = "/js-homework";
//   const initial = "00Basic/01-start.html"; // 상대 경로로 바꿨음

//   // 주소 앞에 항상 basePath를 붙여줌
//   const fullPath = basePath + (currentState || initial);

//   frame.setAttribute("src", fullPath);
// };


export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  const basePath = "/js-homework/";
  const initial = "00Basic/01-start.html";

  // 이미 basePath가 붙어있지 않다면 붙이기
  const fullPath = basePath + (currentState || initial);

  frame.setAttribute("src", fullPath);
};

export const setupIframeLinks = () => {
  const basePath = "/js-homework/";

  document.querySelectorAll('a[data-path]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // 브라우저 기본 이동 방지

      const path = link.getAttribute('href');

      // src만 상대경로 저장
      sessionStorage.setItem("src", path);

      // iframe src 변경
      const fullPath = basePath + path;
      document.querySelector("iframe").setAttribute("src", fullPath);
    });
  });
};
