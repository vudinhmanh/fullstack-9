const time = class {
  constructor(app) {
    this.app = app;
  }
  onTimeUpdate() {
    console.log("time update");
  }
  //   updateTime() {
  //     console.log("update time");
  //   }
};
export default time;
