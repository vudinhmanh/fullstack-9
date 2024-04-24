const seekbar = class {
  constructor(app) {
    this.app = app;
  }
  onTimeUpdate() {
    console.log("time update");
  }
  // updateBar() {
  //   console.log("update bar");
  // }
};
export default seekbar;
