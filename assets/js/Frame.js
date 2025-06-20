export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  const initial = "js-homework/00Basic/01-start.html";

  frame.setAttribute("src", currentState || initial);
};
