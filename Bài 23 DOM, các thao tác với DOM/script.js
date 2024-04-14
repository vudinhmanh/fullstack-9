// var p = document.getElementById("ten");
// p.style.color = "red";
// console.log(p);
// var div = document.createElement("div");
// div.innerText = "vu dinh manh";
// document.body.appendChild(div);
// console.log(div);

// var ps = document.getElementsByTagName("p");
// console.log(ps);

// var ten = document.querySelector("#ten");
// console.log(ten);

// // x = p.getAttribute("class");
// // console.log(x);
// // changeX = p.setAttribute("class", "hihi");
// // p.removeAttribute("class");
// console.log(p.classList.contains("manh"));
// console.log(p.dataset.ten);
// var span = document.createElement("span");
// span.innerText = "dep trai";
// p.appendChild(span);
//Bai tap
// const students = ["manh", "huy", "nam", "huyen", "huy"];
// var studentsUl = document.getElementById("students");
// students.forEach((student) => {
//   var studentLi = document.createElement("li");
//   studentLi.innerText = student;
//   studentsUl.appendChild(studentLi);
// });

// var btn = document.getElementById("btn");
// btn.onclick = () => {
//   console.log("Xin chao");
// };
// btn.addEventListener("click", () => {
//   console.log("123");
// });

var header = document.getElementById("header");
var fullName = document.getElementById("name");
header.onclick = () => {
  console.log("Day la tieu de");
};
fullName.onclick = (e) => {
  e.stopPropagation();
  console.log("Vu Dinh Manh");
};
