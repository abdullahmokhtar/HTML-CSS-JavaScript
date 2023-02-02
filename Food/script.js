// let menuElement = document.querySelector("div.menu");
// let navbarElement = document.querySelector("nav.navbar");
// menuElement.onclick = function () {
//   if (menuElement.style.top == "15rem") {
//     menuElement.style.top = "1rem";
//     navbarElement.style.top = "-14rem";
//   } else {
//     menuElement.style.top = "15rem";
//     navbarElement.style.top = "0";
//   }
// };

document.querySelector(".menu").addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
});

const icons = document.querySelectorAll(".section-1-icons i");
console.log(icons);
let i = 0;
setInterval(() => {
  icons[i].classList.remove("change");
  if (i == 9) i = -1;
  icons[++i].classList.add("change");
}, 4000);
