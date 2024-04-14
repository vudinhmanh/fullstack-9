// var btn = document.getElementById("btn");
// var input = document.getElementById("input");
// var img = document.getElementById("img");
// btn.onclick = () => {
//   console.log("click");
// };
// btn.onmousedown = () => {
//   console.log("down");
// };
// btn.ontouchstart = () => {
//   console.log("ontouchstart");
// };
// btn.onmouseup = () => {
//   console.log("onmouseup");
// };
// btn.ontouchend = () => {
//   console.log("ontouchend");
// };
// btn.onmousemove = () => {
//   console.log("onmousemove");
// };
// input.onfocus = () => {
//   console.log("focus");
// };
// input.onchange = () => {
//   console.log("onchange");
// };
// input.oninput = () => {
//   console.log("oninput");
// };
// img.onload = () => {
//   console.log("Load xong");
// };
// //Sự kiện DOMContentLoaded kích hoạt khi tài liệu HTML ban đầu
// //đã được tải và phân tích cú pháp hoàn toàn mà không cần đợi những file như
// //stylesheets, images và subframes cho đến khi hoàn tất tải file đó
// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("DOM fully loaded and parsed");
// });

//Bai tap

// const click = () => {
//   var showHideBtn = document.getElementById("btn");
//   var content = document.getElementById("content");
//   showHideBtn.onclick = () => {
//     if (content.style.display === "block") {
//       content.style.display = "none";
//     } else {
//       content.style.display = "block";
//     }
//   };
// };
// document.addEventListener("DOMContentLoaded", click);
// const initToggle = (controller) => {
//   let targetId = controller.dataset.toggleTarget;
//   let target = document.querySelector(targetId);
//   controller.addEventListener("click", () => {
//     if (target.style.display != "none") {
//       target.style.display = "none";
//     } else {
//       target.style.display = "block";
//     }
//   });
// };

// const initToggles = () => {
//   let toggleControllers = document.querySelectorAll("[toggleController]");
//   toggleControllers.forEach((controller) => initToggle(controller));
// };

// const boot = () => {
//   initToggles();
// };

// document.addEventListener("DOMContentLoaded", boot);
const collapseAllAccordionChild = (accordionDiv) => {
  let child = accordionDiv.querySelectorAll("li");
  child.forEach((child) => {
    child.classList.remove("active");
  });
};
const initAccordion = (accordionDiv) => {
  let child = accordionDiv.querySelectorAll("li");
  child.forEach((child) => {
    child.onclick = (e) => {
      e.preventDefault();
      collapseAllAccordionChild(accordionDiv);
      child.classList.add("active");
    };
  });
};
const initAccordions = () => {
  let accordions = document.querySelectorAll(".accordion");
  accordions.forEach((accordion) => initAccordion(accordion));
};
const boot = () => {
  initAccordions();
};
document.addEventListener("DOMContentLoaded", boot);
