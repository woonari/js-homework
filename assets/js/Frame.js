export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  const initial = "https://woonari.github.io/js-homework/00Basic/01-start.html";

  frame.setAttribute("src", currentState || initial);
};
