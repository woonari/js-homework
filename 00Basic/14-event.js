/* -------------------------------------------------------------------------- */
/*                                    이벤트제거                               */
/* -------------------------------------------------------------------------- */
const remove = document.querySelector(".btn-remove");

remove.addEventListener("click", () => {
  console.log("이벤트가 실행되었습니다.");
});

/* -------------------------------------------------------------------------- */
/*                                  캡처링과 버블링                            */
/* -------------------------------------------------------------------------- */

// 캡처링
const captureParent = document.querySelector(".capture");
const captureChildren = captureParent.querySelector(".children");

captureParent.addEventListener("click", () => {
  console.log("parent");
});
captureChildren.addEventListener("click", () => {
  console.log("children");
});

// 버블링
const bubbleParent = document.querySelector(".bubble");
const bubbleChildren = bubbleParent.querySelector(".children");

bubbleParent.addEventListener("click", () => {
  console.log("parent");
});
bubbleChildren.addEventListener("click", () => {
  console.log("children");
});

/* -------------------------------------------------------------------------- */
/*                                  이벤트 종류                                */
/* -------------------------------------------------------------------------- */
const mouse = document.querySelector(".event-list .mouse");
const keyboard = document.querySelector(".event-list .keyboard");
const form = document.querySelector(".event-list .form");

const logMessage = (message) => {
  // console.log(message);
};

// 마우스
mouse.addEventListener("click", () => logMessage("클릭"));
mouse.addEventListener("mouseenter", () => logMessage("마우스 진입"));
mouse.addEventListener("mouseleave", () => logMessage("마우스 떠남"));
mouse.addEventListener("mousedown", () => logMessage("마우스 버튼누름"));
mouse.addEventListener("mouseup", () => logMessage("마우스 버튼땜"));
mouse.addEventListener("mousemove", () => logMessage("마우스 움직임"));
mouse.addEventListener("contextmenu", () => logMessage("마우스 우측버튼"));
mouse.addEventListener("wheel", () => logMessage("마우스 휠"));

// 키보드
keyboard.addEventListener("keydown", () => logMessage("키 누름"));
keyboard.addEventListener("keyup", () => logMessage("키 땜"));
keyboard.addEventListener("focus", () => logMessage("초점 발생"));
keyboard.addEventListener("blur", () => logMessage("초점 잃음"));

// 폼
form.addEventListener("input", () => logMessage("값변경"));
form.addEventListener("change", () => logMessage("상태변경"));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  logMessage("데이터 전송");
});

// 문서/윈도우
window.addEventListener("popstate", () => logMessage("페이지 바뀜"));
window.addEventListener("load", () => logMessage("페이지 로드"));
window.addEventListener("scroll", () => logMessage("스크롤"));
window.addEventListener("resize", () => logMessage("창크기 변화"));

/* -------------------------------------------------------------------------- */
/*                                 키보드 keyCode                             */
/* -------------------------------------------------------------------------- */
const key = document.querySelector(".key");

key.addEventListener("keydown", (event) => {
  // console.log(event); // 이벤트 키확인;
});

/* -------------------------------------------------------------------------- */
/*                                animationend                                */
/* -------------------------------------------------------------------------- */
const ani = document.querySelector(".ani");

ani.addEventListener("animationend", () => {
  //   console.log("애니메이션이 종료되었습니다.");
});
