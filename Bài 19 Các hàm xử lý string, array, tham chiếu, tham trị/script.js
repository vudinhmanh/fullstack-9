const fullName = "Vu dinh manh";
//string methods
console.log(fullName.length);
console.log(fullName.split(" "));
console.log(fullName.substring(0, 6));
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
console.log(fullName.indexOf("i"));
console.log(fullName.lastIndexOf("n"));
console.log(fullName.trim());
console.log(fullName.replace("n", "l"));
console.log(fullName.replaceAll("n", "l"));
console.log(fullName.includes("manh"));
console.log(fullName.slice(1, 4));
//array methods
var students = ["manh", "hai", "tung", "ha"];
console.log(students.length);
// students.push('nam');
// students.pop();
// students.shift();
// students.unshift('kien');
// students.reverse();
// students.slice(1, 5);
// console.log(students);
// students.splice(2, 3);//start count
// students.sort();
console.log(students);
// var number = [1, 4, 5, 6, 7, 9, 0 , 2, 1, 3, 4];
// number.sort(function (a, b) {
//     return a - b;
// })
// console.log(number);
var students = [
  { fullName: "Vu Dinh Manh", class: "HTTT01", GPA: 3.33 },
  { fullName: "Vu Dinh Nam", class: "HTTT02", GPA: 2.98 },
  { fullName: "Vu Dinh Tuan", class: "HTTT01", GPA: 3.6 },
  { fullName: "Vu Dinh Hai", class: "HTTT03", GPA: 4.0 },
  { fullName: "Vu Dinh Lan", class: "HTTT06", GPA: 2.0 },
];
var sortedStudents = students.sort((student1, student2) => {
  if (student1.GPA > student2.GPA) {
    return -1;
  } else if (student1.GPA < student2.GPA) {
    return 1;
  } else {
    return 0;
  }
});
console.log(sortedStudents);
//Sap xep so chan truoc roi den so le
// Cach 1
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sortedNumber = number.sort(function (a, b) {
  if (a % 2 == 0) {
    if (b % 2 == 0) {
      return a - b;
    }
    return -1;
//   } else {
//     return 1;
//   }
});
console.log(sortedNumber);
//Sap xep so chan truoc roi den so le
// Cach 2
var oddNumber = number.filter((number) => number % 2 == 1);
var evenNumber = number.filter((number) => number % 2 == 0);
evenNumber.sort((a, b) => a - b);
oddNumber.sort((a, b) => a - b);
var sortedNumber = evenNumber.concat(oddNumber);
console.log(sortedNumber);
// ham reduce
var numbers1 = [1, 2, 3];
var total = numbers1.reduce((t, n) => t + n);
console.log(total);

var products = [
  { name: "xiaomi", quantity: 12, price: 12 },
  { name: "samsung", quantity: 13, price: 5 },
  { name: "lenovo", quantity: 14, price: 9 },
  { name: "asus", quantity: 11, price: 13 },
];
// var sum = products.reduce((t, p) => t + p.price, 0);
// console.log(sum);
// var sum1 = products.reduce((t, p) => t + p.price * p.quantity, 0);
// console.log(sum1);

var tinh = products.reduce(
  (s, sp) => {
    return {
      soSp: s.soSp + sp.quantity,
      tongTien: s.tongTien + sp.quantity * sp.price,
    };
  },
  { soSp: 0, tongTien: 0 }
);
console.log(tinh);

var fullName1 = "Manh";
var fullName2 = fullName1; // lay tham chieu
fullName2 = "Van";
console.log(fullName1);

var person1 = { name: "Nguyen", age: 12 };
var person2 = person1; // lay tham tri
person2.name = "Tung";
console.log(person1);
