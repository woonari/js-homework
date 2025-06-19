/* -------------------------------------------------------------------------- */
/*                                   DOM 선택자                                */
/* -------------------------------------------------------------------------- */
//console.log(document.querySelector('.select'));
//const li = document.querySelector(".select li"); 한개만 선택됨
const lis = document.querySelectorAll(".select li");
//console.log(lis.length);

//각각 개별 선택 forEach
//lis.forEach((인수) =>(실행코드)); 
// lis.forEach((작명, 작명) => (
//     console.log();
    
// )); 
lis.forEach((item, index) => {
    //console.log(item, index); 
    item.style.border = "2px solid red"; 
    item.style.backgroundColor = "orange";

    //console.log(typeof 1); 1이 무엇인지 알고 싶을때 타입오프를 넣어보자!
    
    //item.classList.add("active" + (index + 1) );
    item.classList.add(`active${index + 1}`);
}); 



/* -------------------------------------------------------------------------- */
/*                                 DOM 클래스 제어                              */
/* -------------------------------------------------------------------------- */

const tabsButton = document.querySelectorAll(".tabs button");

tabsButton.forEach((button)=>{//클릭하기 위한 forEach
    button.addEventListener( "click" , ()=> { 
       // console.log("test");
       // button.classList.add("active");
       // button.classList.remove('active'); 내가 선택한 것만 삭제됨.
       // button.classList.toggle('active');
      
       //  1. 클릭한것은 추가 그외 삭제
       //  2. 모두삭제후 클릭한것 추가(탭메뉴에 적당)

       tabsButton.forEach((btn)=>{//삭제하기 위한 forEach
        btn.classList.remove("active");
       });

       button.classList.add("active");   

    });
});




/* -------------------------------------------------------------------------- */
/*                                 DOM 텍스트 제어                              */
/* -------------------------------------------------------------------------- */
const textButton = document.querySelectorAll(".text-list button");

textButton.forEach((btn, index)=>{
    btn.addEventListener("click" , () => {
        const text = btn.textContent;
        // console.log(btn.textContent);
        // alert(text + "버튼을 눌러, 수강신청되었습니다.");
        // alert(`${text}버튼을 ${index + 1}번째를 눌러, 수강신청되었습니다.`);

        const name = btn.previousElementSibling.previousElementSibling.textContent;
        const jab =  btn.previousElementSibling.textContent;
        // console.log(btn.closest("li").querySelector(".name"));
        //console.log(name);
        
        btn.textContent ="수강완료";
        btn.style.border = "1px solid red"
        btn.style.backgroundColor ="red"

        alert(`${name} ${jab}반이 수강신청되었습니다.`);
    });
});



/* -------------------------------------------------------------------------- */
/*                                  DOM 속성 제어                              */
/* -------------------------------------------------------------------------- */
const rating = document.querySelector(".ratings input");

//rating.setAttribute(속성명, 속성값);
//rating.setAttribute("data-text","안녕하세요"); data-작명 <- 이렇게 된것만 커스텀 된뜻!
rating.setAttribute("disabled","true");


//el -->  const ${1:변수명} = document.querySelector("${2:선택자}");
//els --> const ${1:변수명} = document.querySelectorAll("${2:선택자}");
//each --> ${1:선택자}.forEach((${2:아이템명},${3:인덱스값})=>{$4});

const disabledButton = document.querySelector('.btn-disabled');
const radio = document.querySelectorAll('.ratings input');

disabledButton.addEventListener("click",()=>{
    radio.forEach((radio)=>{
        radio.setAttribute("disabled","true");
    });
});


/* -------------------------------------------------------------------------- */
// 1. input 타입을 텍스트로 변경 
// 2. class active추가

// setAttribute("속성명", "속성값")

const showButton = document.querySelector(".password button");
const showText  = document.querySelector(".password input");

// showButton.addEventListener("click",()=>{
//     showText.setAttribute("type","text");
//     showButton.classList.add("active"); 
// });

let toggleShow = true
showButton.addEventListener("click",()=>{
    if(toggleShow){
        showText.setAttribute("type","text");
        showButton.classList.add("active");
    }else{
        showText.setAttribute("type","password");
        showButton.classList.remove("active");
    }
    toggleShow = !toggleShow
})


/* -------------------------------------------------------------------------- */
// 1. readonly를 지워서 텍스트를 입력할 수 있도록 해라
// 2. 재할당당 

const changeInput = document.querySelector(".change-name input");
const changeButton = document.querySelector(".change-name button");

let toggle = true;
changeButton.addEventListener("click",()=>{
    if(toggle){ //if는 항상 true
        changeInput.removeAttribute("readonly");
    }else{
        changeInput.setAttribute("readonly" , "true");
    }
    toggle = !toggle;   
})

/* -------------------------------------------------------------------------- */
// 프로필 이미지 가져오기

const image = document.querySelector(".header img");
const imageSrc = image.getAttribute("src"); //값을 가져오는거거
const imageAlt = image.hasAttribute("alt"); // 있냐 없냐 참이냐 거짓이냐냐

console.log(imageSrc);
console.log(imageAlt);


/* -------------------------------------------------------------------------- */
// 선택한 점수확인하기 버튼!!! 유효성 검사!!
// value 조회해 보기 console.log(rating.value);
// 선택된 value 값 알아내기!!!

const ratingsList = document.querySelectorAll(".ratings input");
const ratingsButton = document.querySelector(".btn-check-count");

ratingsButton.addEventListener("click",()=>{   

    let isValid = false; //선택이 안된것을 초기값 설정
    ratingsList.forEach((rating)=>{
        
        //console.log(rating.value);
        //console.log(rating.checked);
        if(rating.checked){
            console.log(rating.value);
            isValid = true; // 값만 나오게 됨
        }
    });
    
    if(!isValid){
        console.log("선택해주세요");   
    }

})


/* -------------------------------------------------------------------------- */
//파일 선택하기 
//파일을 선택하면 용량을 알 수 있다.
//콘솔에서 알려주는 속성을 가져와서 값을 조절 할 수 있다.

const addFile = document.querySelector(".file");
const addFileName = document.querySelector(".filename");
const addFileSize = document.querySelector(".filesize");

addFile.addEventListener("change",(e)=>{
    // console.log(e.target.files[0].name);  첨부파일 명 알 수 있다. 
    // console.log(new Date(e.target.files[0].lastModified)); //첨부파일 시간 날짜 알려주는 것

    const filename = e.target.files[0].name;
    const filesize = e.target.files[0].size;
    const result = filesize / 2024;

    //console.log(filesize / 1024);
    
    addFileName.textContent =`파일명 : ${filename}`;
    addFileSize.textContent =`파일크기 : ${result.toFixed(2)}kb`; // to fixed를 사용해서 소수점을 없앨 수 있다.
    // addFileSize.textContent =`파일크기 : ${filesize / 1024}kb`;

});

/* -------------------------------------------------------------------------- */
// open속성 btn-avatar

const openPopup = document.querySelector(".btn-avatar");
const popup = document.querySelector(".dialog");
const closePopup = document.querySelector(".dialog .close");

openPopup.addEventListener("click",()=>{
    //popup.show();
    popup.showModal();
});

closePopup.addEventListener("click",()=>{
    popup.close();
});



/* -------------------------------------------------------------------------- */
/*                                 DOM CSS 제어                                */
/* -------------------------------------------------------------------------- */

/* -------------------------------------------------------------------------- */
/*                                   DOM 탐색                                  */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
// 접힘 펼침, 한개만 펼쳐짐

const routineButton = document.querySelectorAll(".routine-list button");

routineButton.forEach((button)=>{
    button.addEventListener("click",()=>{
        //button.nextElementSibling.style.display = "block";
        //button.parentElement.classList.add("active");
        
        routineButton.forEach((btn)=>{
            btn.parentElement.classList.remove("active");
        });
        button.parentElement.classList.add("active");
    });
    
});

/* -------------------------------------------------------------------------- */
// 뎁스의 유무를 파악해서 링크 또는 접힘펼침으로 결정해주기
// 자식 없는거 파악하자!! 없으면 링크로 보내주기

const items = document.querySelectorAll(".routine-list > li");
items.forEach((item)=>{
    const depth = item.querySelector(".detail-list");

    console.log(item.contains(depth)); // contains 참, 거짓을 알 수 있다.
    
    if(!item.contains(depth)){
        const button = item.querySelector("button");
        button.setAttribute("role", "link");

        button.addEventListener("click",()=>{
            window.location.href = "https://www.dbcut.com";
        });   
    }  
});


/* -------------------------------------------------------------------------- */
/*                                   DOM 삽입                                  */
/* -------------------------------------------------------------------------- */
const comment = document.querySelector(".comment");
const addHTML = comment.querySelector(".btn-add-html");
const commentList = comment.querySelector(".comment-list");
const commentInput = comment.querySelector("input");
const addDOM = comment.querySelector(".btn-add-dom");


// const form = comment.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });


addHTML.addEventListener("click",(e)=>{ //태그만 제어
    e.preventDefault(); 
    //commentList.innerHTML = "test";
    //commentList.innerHTML = "<div><button>클릭하세요.</button></div>";
    commentList.innerHTML = `
    <li>첫 댓글 <button class="btn-del">삭제</button></li>
    <li>두 번째 댓글 <button class="btn-del">삭제</button></li>
    <li>세 번째 댓글 <button class="btn-del">삭제</button></li>
    `;
});

addDOM.addEventListener("click",(e)=>{ //텍스트까지 제어
   e.preventDefault();
   const value = commentInput.value;

   console.log(value);

   //commentList.innerHTML = `<li>${value}<button class="btn-del">삭제</button></li>` ; 

   //선택자.insertAdjacentHTML(위치,html); 방식 1
//    commentList.insertAdjacentHTML( // html 넣기기
//      "afterbegin",
//      `<li>${value}<button class="btn-del">삭제</button></li>`
//     );
 
    // 방식 2
    const liEl = document.createElement("li"); 
    const buttonEl = document.createElement("button"); 
    
    buttonEl.classList.add("btn-del");
    buttonEl.textContent = "삭제";
    liEl.textContent = value

    liEl.append(buttonEl);
    console.log(liEl);
    
    commentList.prepend(liEl);
    
   //commentList.prepend(`<li>${value}<button class="btn-del">삭제</button></li>`);
   
   commentInput.value = ""; // input 비워준다
   commentInput.focus(); // input안에 커서 오게 해줌

   const delButton = comment.querySelectorAll(".btn-del");
    delButton.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            e.target.closest("li").remove();
        });
        
    });
   
    
});
