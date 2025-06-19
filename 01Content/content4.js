const title = ["선물하기11","매장찾기22","택배33","이벤트44"];

const lis = document.querySelectorAll(".service-list li");

lis.forEach((li,index)=>{
    const ti = li.querySelector(".title");
    li.textContent = title[index]

});