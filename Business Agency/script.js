let menuElement = document.querySelector(".menu");
let navBarElement = document.querySelector(".navbar");
let navListElement = document.querySelector(".nav-list");
menuElement.addEventListener("click", () => {
  navBarElement.classList.toggle("change");
  menuElement.classList.toggle("change");
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
