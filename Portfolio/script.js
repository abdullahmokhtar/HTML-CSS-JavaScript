let sections = document.querySelectorAll("section");
let navBarLinks = document.querySelectorAll(".navbar-link");

window.addEventListener("scroll", ()=> {
    sections.forEach((section, i) =>{
        if (window.scrollY >= section.offsetTop -10){
            navBarLinks.forEach((link) => {
                link.classList.remove("change")
            })
            navBarLinks[i].classList.add("change")
        }
    })
})

let progressPercents = document.querySelectorAll(".progress-text span");
let progressPercentsElements = document.querySelectorAll(".progress-percent");

progressPercents.forEach((progressPercent, i) => {
    progressPercentsElements[i].style.width = `${progressPercent.innerHTML}%`;
})