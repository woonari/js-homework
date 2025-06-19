const stepBtn = document.querySelector("#stepBtn");
const textBtn = document.querySelector("#textBtn");
const closeBtns = document.querySelectorAll("dialog .btn-close");

const stepCon = document.querySelector("#shippingStep");
const textCon = document.querySelector("#shippingText");


stepBtn.addEventListener("click",()=>{
    stepCon.showModal();
})
textBtn.addEventListener("click",()=>{
    textCon.showModal();
})

closeBtns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        const dialog = btn.closest("dialog");
        if(dialog){
            dialog.close();
        }   
    })    
});