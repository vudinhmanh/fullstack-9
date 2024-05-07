var studentAPI = "http://localhost:3000/Player";
function start() {
  getStudents(renderStudents);
  handleCreateForm();
}
start();

function getStudents(callback) {
  //lay sinh vien su dung callback
  fetch(studentAPI)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}

function renderStudents(students) {
  var liStudent = document.querySelector(".List-student");
  var li = students.map(function (student) {
    return `
      <li class="student-item-${student.id}">
        <h3>${student.name}</h3>
        <p>${student.address}</p>
        <button onclick="handleDeleteStudent('${student.id}')">Xoa</button>
      </li>
    `;
  });
  liStudent.innerHTML = li.join("");
}
function createStudent(data, callback) {
  var options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data),
  };
  fetch(studentAPI, options)
    .then(function (response) {
      response.json();
    })
    .then(callback);
}
function handleCreateForm() {
  var createBtn = document.querySelector(".create-btn");
  createBtn.onclick = function () {
    var name = document.querySelector('input[name="name"]').value;
    var address = document.querySelector('input[name="address"]').value;
    var formData = {
      name: name,
      address: address,
    };
    createStudent(formData, function () {
      getStudents(renderStudents);
    });
  };
}
function handleDeleteStudent(id) {
  var options = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(studentAPI + "/" + id, options)
    .then(function (response) {
      response.json();
    })
    .then(function () {
      var liStudent = document.querySelector(".student-item-" + id);
      if (liStudent) {
        liStudent.remove();
      }
    });
}

// function getStudents() {
//   //lay sinh vien su dung promise
//   fetch(studentAPI)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       renderStudents(data);
//     })
//     .catch(function () {
//       alert("ERROR API");
//     });
// }

// async function getStudents() {
//   // lay sinh vien su dung Async/Await
//   try {
//     const response = await fetch(studentAPI); // Gửi yêu cầu GET đến URL studentAPI và chờ phản hồi
//     if (!response.ok) {
//       // Kiểm tra nếu phản hồi không thành công
//       throw new Error("Network response was not ok"); // Ném một lỗi nếu phản hồi không thành công
//     }
//     const data = await response.json(); // Chuyển đổi phản hồi thành JSON và chờ kết quả
//     renderStudents(data); // Gọi hàm renderStudents với dữ liệu nhận được
//   } catch (error) {
//     alert("ERROR API"); // Hiển thị cảnh báo lỗi
//   }
// }
