import player from "./player.js";
import seekbar from "./seekbar.js";
import time from "./time.js";
class app {
  constructor() {
    this.timeUpdateListeners = [];
    this.player = new player(this);
    this.seekbar = new seekbar(this);
    this.time = new time(this);
    this.addListeners();
  }
  addListeners() {
    this.timeUpdateListeners.push(this.player);
    this.timeUpdateListeners.push(this.seekbar);
    this.timeUpdateListeners.push(this.time);
  }
  timeupdate() {
    this.timeUpdateListeners.forEach((listenerObj) => {
      listenerObj.onTimeUpdate();
    });
  }
}
var myApp = new app();
var p = new player();
var playBtn = document.querySelector(".playBtn");
playBtn.onclick = () => {
  //   p.setSong({
  //     name: "Bai hat 1",
  //     file: "./Thang-Tu-La-Loi-Noi-Doi-Cua-Em-Ha-Anh-Tuan.mp3",
  //   });
  //   p.play();
  myApp.player.play();
};
