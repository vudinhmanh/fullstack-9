// loc phan tu chia het cho 2
var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
var oddNumbers = numbers.filter((n) => n % 2 == 0);
console.log(oddNumbers);
// tat ca phan tu trong mang tang len 2 lan
var doubleNumbers = numbers.map((n) => n * 2);
console.log(doubleNumbers);
// 1 phan tu thoa man => return true
var Tim1sochiaHetCho100 = numbers.some((n) => n % 100 == 0);
console.log(Tim1sochiaHetCho100);
// tat ca phan tu thoa man
var numbers1 = [2, 4, 6, 8];
var timTatCaSoChiaHet2 = numbers1.every((n) => n % 2 == 0);
console.log(timTatCaSoChiaHet2);
// tim phan tu dau tien thoa man
var numbers2 = [2, 4, 6, 8, 10];
var soDauTienChiaHet4 = numbers2.find((n) => n % 4 == 0);
var viTriDauTienChiaHet4 = numbers2.findIndex((n) => n % 4 == 0);
console.log(soDauTienChiaHet4);
console.log(viTriDauTienChiaHet4);
// tim 1 phan tu trong mang
var numbers3 = [1, 9, 1, 7, 8, 3, 12];
var findNumbers3 = numbers3.includes(9, 6);
console.log(findNumbers3);
//Destructuring
var numbers4 = [1, 2, 3, 4, 5];
var firstIndex = numbers4[0];
console.log(firstIndex);
//
var [a, b] = [10, 7];
console.log(a, b);
var { fullName, major } = { fullName: "Manh", major: "information system" };
console.log(fullName, major);
//
var person = {
  name: "Vu Dinh Manh",
  age: 21,
  child: {
    name: "Vu Dinh Nam",
    age: 1,
  },
};
var { child } = person;
console.log(child);
//
var getPerson = () => {
  return ["Manh", "devFE"];
};
var [fullName, jobPos] = getPerson();
console.log(fullName, jobPos);
//
const Hello = ({
  fullName,
  jobPos,
  brother: { fullName: brotherName, jobPos: brotherJobPos },
}) => {
  console.log("Xin chao tao la: " + fullName);
  console.log("Cong viec hien tai: " + jobPos);
  console.log("Em toi ten la: " + brotherName);
  console.log("Cong viec hien tai: " + brotherJobPos);
};
Hello({
  fullName: "Vu Dinh Manh",
  jobPos: "Fe dev",
  brother: {
    fullName: "Vu Tuan Tu",
    jobPos: "Student",
  },
});
//
var numbers5 = [1, 2, 3, 4, 5, 6, 7];
var numbers6 = [...numbers5];
console.log(numbers6);
// tham tri
var person1 = {
  name: "Manh",
  age: 23,
};
var person2 = {
  ...person1,
};
person2.name = "Nam";
console.log(person1);
//tham chieu
var person1 = {
  name: "Manh",
  age: 23,
};
var person2 = person1;
person2.name = "Nam";
console.log(person1);
