var play = document.getElementById("play");
var stop = document.getElementById("stop");
var audio = document.getElementById("audio");
var range = document.getElementById("range");
var rangeWrap = document.getElementById("rangeWrap");
play.addEventListener("click", () => {
  audio.play();
});
stop.addEventListener("click", () => {
  audio.pause();
});
audio.addEventListener("timeupdate", () => {
  let percents = (audio.currentTime / audio.duration) * 100;
  range.style.width = percents * 2 + "px";
});
rangeWrap.addEventListener("click", (e) => {
  let percents = e.offsetX / 2;
  let time = (percents / 100) * audio.duration;
  audio.currentTime = time;
});
var dragingRange = false;
//mousedown khi giu chuot
rangeWrap.addEventListener("mousedown", () => {
  dragingRange = true;
});
//mouseup khi nha chuot
rangeWrap.addEventListener("mouseup", () => {
  dragingRange = false;
});
rangeWrap.addEventListener("mousemove", (e) => {
  if (dragingRange == false) {
    return;
  }
  let percents = e.offsetX / 2;
  // console.log(percents);
  let time = (percents / 100) * audio.duration;
  // console.log(time);
  audio.currentTime = time;
});
//next btn
var nextBtn = document.getElementById("next");
const songs = [
  "Chuyen-Rang-Thinh-Suy.mp3",
  "Hom-Nay-Toi-Buon-Phung-Khanh-Linh (1).mp3",
  "Thang-Tu-La-Loi-Noi-Doi-Cua-Em-Ha-Anh-Tuan.mp3",
  "Dang-Em-Duong-Edward.mp3",
];
const next = () => {
  currentSong++;
  audio.src = songs[currentSong];
  console.log(currentSong);
  audio.play();
};
var currentSong = 0;
audio.src = songs[currentSong];
nextBtn.addEventListener("click", () => {
  next();
});
audio.addEventListener("ended", () => {
  next();
});
//prev btn
var prevBtn = document.getElementById("prev");
prevBtn.addEventListener("click", () => {
  currentSong--;
  audio.src = songs[currentSong];
  console.log(currentSong);
  audio.play();
});
