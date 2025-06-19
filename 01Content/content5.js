const data = [
  {
    title: "서비스 안내",
    description: "기업상조 지원 서비스 이용 철차 안내",
    image: "../images/ico_content5-1.svg",
  },
  {
    title: "장례 절차",
    description: "장례발생후 장례절차 흐름도로 알아보기",
    image: "../images/ico_content5-2.svg",
  },
  {
    title: "조문 예절",
    description: "어렵고 생소한 장례 예법 풀어서 알아보기",
    image: "../images/ico_content5-3.svg",
  },
];

const list = document.querySelector(".service-list");

const result = data.map((item, index)=>{
    //console.log(item, index);
    //console.log(item.title);

     const {description, image,title} = item;
    
     return `
      <li>
        <a href="">
          <strong class="title">${title}</strong>
          <p class="description">${description}</p>
        </a>
      </li>
     `;
});

console.log(result);
list.innerHTML = result.join("");
