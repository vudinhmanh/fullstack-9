const wrapper = document.querySelector(".wrapper"),
  musicImg = document.querySelector(".img-music img"),
  musicName = document.querySelector(".song-detail .name"),
  musicArtist = document.querySelector(".song-detail .artist"),
  audio = document.querySelector("#audio"),
  playPauseBtn = document.querySelector(".pause-btn i"),
  preBtn = document.querySelector(".preBtn"),
  nextBtn = document.querySelector(".nextBtn"),
  progressBar = document.querySelector(".progress-bar");
let musicIndex = 0;
// console.log(pauseBtn);
window.addEventListener("load", () => {
  loadMusic(musicIndex);
});
const loadMusic = (indexNumber) => {
  musicName.innerText = allMusic[indexNumber].name;
  musicArtist.innerText = allMusic[indexNumber].artist;
  musicImg.src = `./img/${allMusic[indexNumber].img}.jpg`;
  audio.src = `./songs/${allMusic[indexNumber].src}.mp3`;
  console.log(audio.src);
};
const playMusic = () => {
  playPauseBtn.classList.remove("fa-play");
  playPauseBtn.classList.add("fa-pause");
  audio.play();
};
const pauseMusic = () => {
  playPauseBtn.classList.remove("fa-pause");
  playPauseBtn.classList.add("fa-play");
  audio.pause();
};
playPauseBtn.addEventListener("click", () => {
  const isMusicPaused = playPauseBtn.classList.contains("fa-play");
  if (isMusicPaused) {
    playMusic();
  } else {
    pauseMusic();
  }
});
nextBtn.addEventListener("click", () => {
  musicIndex++;
  if (musicIndex == allMusic.length) {
    musicIndex = 0;
  }
  loadMusic(musicIndex);
});
preBtn.addEventListener("click", () => {
  musicIndex--;
  if (musicIndex < 0) {
    musicIndex = allMusic.length - 1;
  }
  loadMusic(musicIndex);
});
audio.addEventListener("timeupdate", (e) => {
  console.log(e);
  console.log(e.duration);
});
