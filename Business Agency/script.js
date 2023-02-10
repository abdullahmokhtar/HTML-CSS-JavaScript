let menuElement = document.querySelector(".menu");
let navBarElement = document.querySelector(".navbar");
let navListElement = document.querySelector(".nav-list");
menuElement.addEventListener("click", () => {
 navBarElement.classList.toggle("change");
 menuElement.classList.toggle("change");
});
