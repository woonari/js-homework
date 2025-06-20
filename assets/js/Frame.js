export const Frame = () => {
  const currentState = sessionStorage.getItem("src");
  const frame = document.querySelector("iframe");
  const basePath = "/js-homework/";
  const initial = "00Basic/01-start.html";

  const fullPath = basePath + (currentState || initial);

  //frame.setAttribute("src", currentState || initial);
  frame.setAttribute("src", fullPath);
};
