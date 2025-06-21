import { data } from "./data/list11_data.js";

export const SNB = (option = {}) => {

  const config = {
    parent: ".snb",
    activeName: "active",
    depthClassName: "depth",
    ...option,
  };

const { activeName, depthClassName, parent } = config; //구조분해 할당

  const snb = document.querySelector(parent);

  if (!snb) {
    return;
  }

  /* -------------------------------- Depth2 제어 ------------------------------- */
  const depth2 = (arry) => {
    return arry
      .map((item2) => {
        return `
        <li><a href="${item2.depth2Link}">- ${item2.depth2Title}</a></li>
    `;
      })
      .join("");
  };

  /* ------------------------------- 서브메뉴 이벤트 제어 ---------------------------- */
  const handleSNB = () => {
    const buttons = snb.querySelectorAll("button");
    console.log(buttons);

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        button.classList.toggle(activeName);
      });
    });
  };
/* ----------------------------------- 서브메뉴 데이터 바인딩------------------------- */
  const SNBBind = () => {
    //   방법1
    //   ${item.depth2 ? "있음" : "없음"}
    const result = data.map((item) => {
      return `
        <li>
            ${
              item.depth2
                ? `<button type="button">${item.depth1Title}</button>`
                : `<a href="${item.depth1Link}">${item.depth1Title}</a>`
            }
            ${
              item.depth2
                ? `
                <ul class="${depthClassName}">
                    ${depth2(item.depth2)}
                </ul>
                `
                : ""
            }
        </li>
    `;
    });

    snb.innerHTML = result.join("");
    handleSNB();
    //   방법2
    //   snb.innerHTML = data.map((item) => {
    //     return `
    //         <li><a href="">보도자료</a></li>
    //     `;
    //   }).join('');
  };
  SNBBind();
};

// SNB();
