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
  btnShuffle = document.querySelector(".btnShuffle"),
  listMusic = document.querySelector(".music-list"),
  showPlayList = document.querySelector(".show-music"),
  hidePlayList = document.querySelector(".hide-music");

let musicIndex = 0;
// console.log(btnShuffle);

window.addEventListener("load", () => {
  loadMusic(musicIndex);
  playingSong();
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
  playingSong();
});
preBtn.addEventListener("click", () => {
  musicIndex--;
  if (musicIndex < 0) {
    musicIndex = allMusic.length - 1;
  }
  loadMusic(musicIndex);
  playMusic();
  playingSong();
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
  if (btnShuffle.classList.contains("fa-repeat")) {
    btnShuffle.classList.add("fa-rotate");
    btnShuffle.classList.remove("fa-repeat");
  } else if (btnShuffle.classList.contains("fa-rotate")) {
    btnShuffle.classList.add("fa-shuffle");
    btnShuffle.classList.remove("fa-rotate");
  } else {
    btnShuffle.classList.add("fa-repeat");
    btnShuffle.classList.remove("fa-shuffle");
  }
});
audio.addEventListener("ended", () => {
  if (btnShuffle.classList.contains("fa-rotate")) {
    audio.currentTime = 0;
    loadMusic(musicIndex);
    playMusic();
  } else if (btnShuffle.classList.contains("fa-repeat")) {
    musicIndex++;
    if (musicIndex == allMusic.length) {
      musicIndex = 0;
    }
    loadMusic(musicIndex);
    playMusic();
    playingSong();
  } else {
    let randIndex;
    do {
      randIndex = Math.floor(Math.random() * allMusic.length + 1);
    } while (musicIndex == randIndex);
    musicIndex = randIndex;
    loadMusic(musicIndex);
    playMusic();
    playingSong();
  }
});
showPlayList.addEventListener("click", () => {
  listMusic.classList.toggle("show");
});
hidePlayList.addEventListener("click", () => {
  listMusic.classList.remove("show");
});
const allPlayList = document.querySelector(".list-music");
for (let i = 0; i < allMusic.length; i++) {
  let liTag = `<li li-index="${i}">
                <div class="row">
                  <span>${allMusic[i].name}</span>
                  <p>${allMusic[i].artist}</p>
                </div>
                <span id="${allMusic[i].src}" class="audio-duration"></span>
                <audio class="${allMusic[i].src}" src="./songs/${allMusic[i].src}.mp3"></audio>
              </li>`;
  allPlayList.insertAdjacentHTML("beforeend", liTag);

  let liAudioDuartionTag = allPlayList.querySelector(`#${allMusic[i].src}`);
  let liAudioTag = allPlayList.querySelector(`.${allMusic[i].src}`);
  liAudioTag.addEventListener("loadeddata", () => {
    let duration = liAudioTag.duration;
    let totalMin = Math.floor(duration / 60);
    let totalSec = Math.floor(duration % 60);
    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }
    liAudioDuartionTag.innerText = `${totalMin}:${totalSec}`;
    liAudioDuartionTag.setAttribute("t-duration", `${totalMin}:${totalSec}`);
  });
}
function playingSong() {
  const allLiTag = allPlayList.querySelectorAll("li");
  // console.log(allLiTag);
  for (let j = 0; j < allLiTag.length; j++) {
    let audioTag = allLiTag[j].querySelector(".audio-duration");

    if (allLiTag[j].classList.contains("playing")) {
      allLiTag[j].classList.remove("playing");
      let adDuration = audioTag.getAttribute("t-duration");
      audioTag.innerText = adDuration;
    }
    if (allLiTag[j].getAttribute("li-index") == musicIndex) {
      allLiTag[j].classList.add("playing");
      audioTag.innerText = "Playing";
    }
    allLiTag[j].setAttribute("onclick", "clicked(this)");
  }
}
function clicked(element) {
  let getLiIndex = element.getAttribute("li-index");
  musicIndex = getLiIndex;
  loadMusic(musicIndex);
  playMusic();
  playingSong();
}
