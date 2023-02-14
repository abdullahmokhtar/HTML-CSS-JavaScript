let menuElement = document.querySelector(".menu");
let navBarElement = document.querySelector(".navbar");
let navListElement = document.querySelector(".nav-list");
let linkNavBarElements = document.querySelectorAll(".nav-list a");

menuElement.addEventListener("click", () => {
  navBarElement.classList.toggle("change");
  menuElement.classList.toggle("change");
});

linkNavBarElements.forEach((element) => {
  element.onclick = function () {
    navBarElement.classList.toggle("change");
    menuElement.classList.toggle("change");
  };
});
// section 2
let btnElement = document.querySelector(".buttons i");
let videoElement = document.querySelector(".video");
let videoBarElement = document.querySelector(".video-bar");

const playPause = () => {
  if (videoElement.paused) {
    videoElement.play();
    btnElement.className = "far fa-pause-circle";
    videoElement.style.opacity = "0.7";
  } else {
    videoElement.pause();
    btnElement.className = "far fa-play-circle";
    videoElement.style.opacity = "0.3";
  }
};

btnElement.addEventListener("click", () => {
  playPause();
});

videoElement.addEventListener("timeupdate", () => {
  const barWidth = videoElement.currentTime / videoElement.duration;
  videoBarElement.style.width = `${barWidth * 100}%`;
  if (videoElement.ended) {
    btnElement.className = "far fa-play-circle";
    videoElement.style.opacity = "0.3";
  }
});

// swiper

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 70,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});
