let projectBtnElements = document.querySelectorAll(".story-btn");
let scrollBtnElement = document.querySelector(".scroll-up-btn");

projectBtnElements.forEach((btn)=>{
    btn.addEventListener("click", ()=>{
        btn.classList.toggle("change")
        btn.nextElementSibling.classList.toggle("change")
    })
})

window.onscroll = function(){
    if (scrollY > 200){
        scrollBtnElement.style.visibility = "visible";
    }else{
        scrollBtnElement.style.visibility = "hidden";
    }
}