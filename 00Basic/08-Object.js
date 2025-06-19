/* -------------------------------------------------------------------------- */
/*                                    객체생성                                 */
/* -------------------------------------------------------------------------- */
const user = {
    name:"이은하",
    description :"자바스크립트를 열심히 배우고 있는 디자이너입니다!!! 잘부탁 드립니다!!",
    information :{
        age: 45,
        city:"incheon",
        country: "korea",
    },
    hellow : function(){
        console.log("안녕하세요?");
        
    }
}

//console.log(user.information.age);
user.hellow(); //객체구조로 매서드를 만듬

// const profile = document.querySelector(".profile");
// const hello = profile.querySelector("h2");
// const description = profile.querySelector("p");

// const infomation = document.querySelector("선택자");

// hello.innerHTML = `안녕하세요, ${user.name}입니다!`;
// description.innerHTML = `${user.description}`;


// 방식2로!!
const profile = document.querySelector(".profile");

// profile.innerHTML = /* html */
// ` 
//       <img src="${user.image}" alt="사용자 아바타" class="avatar">
//       <h2 class="hello">안녕하세요, ${user.name}입니다!</h2>
//       <p class="short-description">
//         ${user.description}
//       </p>
//       <h3 class="title">기본 정보</h3>
//       <ul class="infomation">
//         <li><span>${user.information.age}</span><strong>나이</strong></li>
//         <li><span>${user.information.city}</span><strong>도시</strong></li>
//         <li><span>${user.information.country}</span><strong>국가</strong></li>
//       </ul>
// `;



//데이터가 없을때 처리 방법-옵셔널(선택적) 체이닝방법!!
profile.innerHTML = /* html */
` 
      <img src="${user?.image || ".images/003.jpg"}" alt="사용자 아바타" class="avatar">
      <h2 class="hello">안녕하세요, ${user?.name || "사용자"}입니다!</h2>
      <p class="short-description">
        ${user.description}
      </p>
      <h3 class="title">기본 정보</h3>
      <ul class="infomation">
        <li><span>${user?.information?.age || "데이터가 없습니다."}</span><strong>나이</strong></li> 
        <li><span>${user.information.city}</span><strong>도시</strong></li>
        <li><span>${user.information.country}</span><strong>국가</strong></li>
      </ul>
`;




/* -------------------------------------------------------------------------- */
/*                                    객체접근                                 */
/* -------------------------------------------------------------------------- */
user.image = "./images/002.jsp";
console.log(user);



/* -------------------------------------------------------------------------- */
/*                                   선택적 체이닝                             */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                  배열 구조분해할당                           */
/* -------------------------------------------------------------------------- */

const arry = ["나이", "이름", "사는곳"];
//console.log(arry[2]);

const arry1 = arry[0];
const arry2 = arry[1];
const arry3 = arry[2];

console.log(arry3);

const [a, b, c] =arry;

const objData = {
  name: "홍길동",
  age: 10,
  city: "seoul",
  image: "./images/001.jpg",
  login: true,
};

// const {key명을 넣어준다.} = objData;
const {age,image,city,login,name} = objData;

console.log(city);



/* -------------------------------------------------------------------------- */
/*                                  객체 구조분해할당                            */
/* -------------------------------------------------------------------------- */





