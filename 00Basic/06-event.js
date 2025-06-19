const message = document.querySelector(".message");
const click = document.querySelector(".click");
const enter = document.querySelector(".enter");
const leave = document.querySelector(".leave");
const inputText = document.querySelector(".input input");
const change = document.querySelector(".change select");
const submit = document.querySelector(".submit");
const submitID = document.querySelector(".submit .id");
const submitNickname = document.querySelector(".submit .nickname");
const target = document.querySelector(".target .parent");

const log = function (text) {
  const div = document.createElement("div");
  div.innerHTML = text;

  message.appendChild(div);
  message.scrollTop = message.scrollHeight;
};

click.addEventListener("click", function () {
  log("click");
});

enter.addEventListener("mouseenter", function () {
  log("mouseenter");
});

leave.addEventListener("mouseleave", function () {
  log("mouseleave");
});

inputText.addEventListener("input", function (e) {
  log(e.target.value);
});

change.addEventListener("change", function (e) {
  log(e.target.value);
});

submit.addEventListener("submit", function (e) {
  console.log(e);

  e.preventDefault();
  // const id = submitID.value;
  // const nickname = submitNickname.value;

  // if (id === "" || nickname === "") {
  //   log("아이디 또는 닉네임을 입력하세요.");
  //   return;
  // }

  // log("아이디:" + id + " / 닉네임:" + nickname);
});

// 1. 링크를 선택자로 지정
// 2. 링크에 click 이벤트를(addEventListener) 등록
// 3. preventDefault 적용
const link = document.querySelector(".link");
link.addEventListener("click", function(e) {
 e.preventDefault(); //기본 동작을 막는다
});


target.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(e);

  const isTarget = e.target.id;
  const isCurrentTarget = e.currentTarget.id;

  log(isTarget);
  //log(isCurrentTarget);
});

