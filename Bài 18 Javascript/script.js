// JavaScript Template Strings
var ho = 'vu'
var ten ='manh'
var tenDayDu = `xin chao ban ${ho} ${ten}`
console.log(tenDayDu);
var test = `vu dinh manh 
manhmanh
`
console.log(test);
var age = 34.5
console.log(age);
//Array
var students = [
    'manh', 
    'manh1', 
    'manh2',
    ['dep trai', 'nhieu tien']
]
console.log(students);
console.log(students[0]);   
//Object
var phone = {
    model : 'Iphone 14',
    screenSize: 7,
    cpu: {
        brand: "mediatek",
        speed: 2.4
    }
}
console.log(phone);
console.log(phone.screenSize);
console.log(phone.cpu.brand);
//function
(function hello() {
    console.log("Hello world");
})()
function Chao(ten, tuoi) {
    console.log(`Xin chao toi ten la ${ten}, nam nay ${tuoi}`);
}
Chao("manh", 21);
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
var array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array: " + array);
console.log("Sorted array: " + bubbleSort(array));
function number(...So){
    console.log(So);
}
number(3, 4, 5, 3, 3, 3);
function test0(a, b) {
    let tong = a + b;
    return tong;
}
console.log(test0(3, 5));
//arrow function
const test1 = (a, b) => {
    return a + b;
}
console.log(test1(4, 5));

const test3 = (a, b) => a + b;
console.log(test3(5, 5));