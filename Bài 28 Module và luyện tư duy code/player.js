const player = class {
  constructor(app) {
    this.app = app;
    this.song = {
      name: "Bai hat 1",
      file: "./Thang-Tu-La-Loi-Noi-Doi-Cua-Em-Ha-Anh-Tuan.mp3",
    };
    this.audio = new Audio();
    this.listenAudioEvents();
  }
  listenAudioEvents() {
    this.audio.addEventListener("timeupdate", () => {
      console.log("audio time update");
      this.app.timeupdate();
    });
  }
  setSong(song) {
    this.song = song;
  }
  play() {
    this.audio.src = this.song.file;
    this.audio.play();
  }
  pause() {
    this.audio.pause();
  }
};
export default player;
