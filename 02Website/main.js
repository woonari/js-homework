import { data } from "./data/main_data.js";

export const GNB = () => {
  /* -------------------- 옵션값을 모아서 관리하기 (global.js 파일로 넘기기) ------------------- */
  const config = {};

  const gnb = document.querySelector(".gnb ul");

  if (!gnb) {
    return;
  }
  /* ---------------------------------- Depth2 제어 ----------------------------- */
  const depth2 = (menu) => {
    return menu
      .map((item2) => {
        return `
        <li><a href="${item2.depth2Link}">${item2.depth2Title}</a></li> 
        `;
      })
      .join("");
  };
  /* ---------------------------------- 서브메뉴 ---------------------------------- */
  const Bind = () => {
    const result = data.map((item) => {
      return `
            <li>
                <a href="${item.depth1Link}">${item.depth1Title}</a>
                ${
                  item.depth2
                    ? `
                        <div class="depth2">
                            <ul>
                            ${depth2(item.depth2)}
                            </ul>
                        </div>
                    `
                    : ""
                }
            </li>
        `;
    });

    gnb.innerHTML = result.join("");
  };
  Bind();
};

//GNB();
