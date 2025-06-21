export const Select = (onSelect, options = {}) => {
  // 유연하게 객체로 관리
  const config = {
    parent: ".select",
    activeClassName: "active",
    topVariableName: "--top",
    ...options,
  };

  const selects = document.querySelectorAll(config.parent);

  if (selects === 0) {
    return;
  }
  //셀렉트가 없으면 실행 시키지 않음!

  /* ---------------------------------- 토글버튼 ---------------------------------- */
  const toggleList = (select) => {
    const button = select.querySelector("button");

    //1. 버튼을 누르면 접힘펼침 - .select.active
    button.addEventListener("click", () => {
      select.classList.toggle(config.activeClassName);
    });
  };

  /* ---------------------------------- 리스트제어 --------------------------------- */
  const handleList = (select) => {
    const button = select.querySelector("button");
    const list = select.querySelectorAll("li");
    const div = select.querySelector("div");

    const height = button.offsetHeight;
    console.log(height);
    // 4. div.style.setProperty(변수명,값)
    div.style.setProperty(config.topVariableName, `${height}px`);

    // 2. 리스트를 누르면 해당 텍스트가 버튼으로 복제
    list.forEach((li) => {
      li.addEventListener("click", (e) => {
        const text = li.textContent;
        const value = e.target.value;
        button.textContent = text;

        if (typeof onSelect == "function") {
          onSelect(value);
        } else {
          console.error("반드시 함수로 전달해야 합니다.");
        }

        // 3.리스트를 누르면 리스트가 접힘 .select removeClass active
        select.classList.remove(config.activeClassName);
      });
    });
  };

  selects.forEach((select) => {
    toggleList(select);
    handleList(select);
  });
};
