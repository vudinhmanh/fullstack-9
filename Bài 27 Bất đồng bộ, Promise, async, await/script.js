// function Cong(a, b, c) {
//   let tong = a + b;
//   c(tong);
// }
// Cong(3, 4, (tong) => {
//   console.log(tong);
// });

// var p = new Promise((resolve,  ) => {
//   setTimeout(() => {
//     let r = Math.random();
//     if (r > 0.2) {
//       resolve("Vu Dinh Manh");
//     } else {
//       reject();
//     }
//     console.log(r);
//   }, 2000);
// });
// p.then((msg) => {
//   console.log("Thanh cong", msg);
// });
// p.catch(() => {
//   console.log("That bai");
// });

// async function getUser() {
//   return 1;
// }
// getUser().then((so) => {
//   console.log(so);
// });

// // Hàm bất đồng bộ trả về một Promise sau một khoảng thời gian nhất định
// function waitForSomeTime(ms) {
//   return new Promise((resolve) => setTimeout(resolve, ms));
// }
// // Hàm chứa từ khóa async, sử dụng await để đợi cho Promise được giải quyết
// async function asyncFunction() {
//   console.log("Bắt đầu");
//   // Đợi cho Promise được giải quyết trong 2 giây
//   await waitForSomeTime(2000);
//   console.log("Sau khi đã chờ 2 giây");
//   // Tiếp tục thực thi
//   return "Hoàn thành";
// }
// // Gọi hàm bất đồng bộ và sử dụng .then() để xử lý kết quả
// asyncFunction()
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));

const getUserRequest = fetch("https://dummyjson.com/users");
const p1 = new Promise((resolve, reject) => {
  resolve();
});
const p2 = new Promise((resolve, reject) => {
  reject();
});
// const kq = Promise.all([getUserRequest, p2]);
const kq = Promise.any([p1, p2]);
// any chi can co 1 promise resolve => resolve
kq.then(() => {
  console.log("thanh cong");
});
kq.catch(() => {
  console.log("that bai");
});
