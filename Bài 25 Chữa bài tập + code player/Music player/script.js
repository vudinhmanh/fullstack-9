const wrapper = document.querySelector(".wrapper"),
  musicImg = document.querySelector(".img-music img"),
  musicName = document.querySelector(".song-detail .name"),
  musicArtist = document.querySelector(".song-detail .artist"),
  audio = document.querySelector("#audio"),
  playPauseBtn = document.querySelector(".pause-btn i"),
  preBtn = document.querySelector(".preBtn"),
  nextBtn = document.querySelector(".nextBtn"),
  progressBar = document.querySelector(".progress-bar"),
  musicCurrentTime = document.querySelector(".currentTime"),
  endTime = document.querySelector(".endTime"),
  progressArea = document.querySelector(".progress-area"),
  btnShuffle = document.querySelector(".btnShuffle");
let musicIndex = 0;
// console.log(btnShuffle);
// console.log(pauseBtn);
window.addEventListener("load", () => {
  loadMusic(musicIndex);
});
const loadMusic = (indexNumber) => {
  musicName.innerText = allMusic[indexNumber].name;
  musicArtist.innerText = allMusic[indexNumber].artist;
  musicImg.src = `./img/${allMusic[indexNumber].img}.jpg`;
  audio.src = `./songs/${allMusic[indexNumber].src}.mp3`;
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
  playMusic();
});
preBtn.addEventListener("click", () => {
  musicIndex--;
  if (musicIndex < 0) {
    musicIndex = allMusic.length - 1;
  }
  loadMusic(musicIndex);
  playMusic();
});
audio.addEventListener("timeupdate", (e) => {
  let currentTime = e.target.currentTime;
  let duration = e.target.duration;
  const progressWidth = (currentTime / duration) * 100;
  progressBar.style.width = `${progressWidth}%`;
  // console.log(currentTime);
  let currentMin = Math.floor(currentTime / 60);
  let currentSec = Math.floor(currentTime % 60);
  if (currentSec < 10) {
    currentSec = `0${currentSec}`;
  }
  musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
  audio.addEventListener("loadeddata", () => {
    let audioDuration = audio.duration;
    let totalMin = Math.floor(audioDuration / 60);
    let totalSec = Math.floor(audioDuration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    endTime.innerText = `${totalMin}:${totalSec}`;
  });
});
progressArea.addEventListener("click", (e) => {
  let maxWBar = progressArea.clientWidth;
  let percent = e.offsetX / maxWBar;
  let songDuration = audio.duration;
  audio.currentTime = percent * songDuration;
  playMusic();
});
let dragging = false;

progressArea.addEventListener("mousedown", () => (dragging = true));
progressArea.addEventListener("mouseup", () => (dragging = false));

progressArea.addEventListener("mousemove", (e) => {
  if (!dragging) return;
  const maxWBar = progressArea.clientWidth;
  const percent = e.offsetX / maxWBar;
  audio.currentTime = percent * audio.duration;
  playMusic();
});

btnShuffle.addEventListener("click", () => {
  if (btnShuffle.classList.contains("fa-shuffle")) {
    btnShuffle.classList.add("fa-repeat");
    btnShuffle.classList.remove("fa-shuffle");
  } else {
    btnShuffle.classList.add("fa-shuffle");
    btnShuffle.classList.remove("fa-repeat");
  }
});
const repeatOneMusic = () => {
  if (btnShuffle.classList.contains("fa-repeat")) {
    audio.currentTime = 0;
    loadMusic(musicIndex);
    playMusic();
  }
};
