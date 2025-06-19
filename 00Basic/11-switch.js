const body = document.body;
const themeSelect = document.querySelector("#theme");
const content = document.querySelector("#content");

/* -------------------------------------------------------------------------- */
/*                                     if                                     */
/* -------------------------------------------------------------------------- */
// 크고 작고 부정 긍정 등 일때 작동 함!
// themeSelect.addEventListener("change",(e)=>{ //옵션이 바뀔때마다 선택한다..
//     const value = e.target.value;
//     console.log(value);
//      if (value === "light") {
//             body.style.backgroundColor = "lightgray";
//      } else if (value === "dark") {
//             body.style.backgroundColor = "darkgray";
//      }
// });



/* -------------------------------------------------------------------------- */
/*                                   Switch                                   */
/* -------------------------------------------------------------------------- */


themeSelect.addEventListener("change",(e)=>{ //값이 일치 일때만 작동함!!
    const value = e.target.value;
    console.log(value);
    switch (value) {
        case "light":
            body.style.backgroundColor = "lightgray";
            break;
        case "dark":
            body.style.backgroundColor = "darkgray";
            break;
        case "blue":
            body.style.backgroundColor = "blue";
            break;
        case "silver":
            body.style.backgroundColor = "silver";
            break;
    }

});



