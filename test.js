function modernFisherYatesShuffle(arr) {
  const n = arr.length;
  // Khởi tạo danh sách chỉ số từ 0 đến n-1
  const indices = [...Array(n).keys()];
  // Sử dụng Fisher-Yates Shuffle để xáo trộn danh sách chỉ số
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [indices[i], indices[j]] = [indices[j], indices[i]];
  }
  // Lặp qua các phần tử đã được xáo trộn
  for (const i of indices) {
    // Nếu phần tử chưa được chọn, chọn phần tử đó và đánh dấu là đã chọn
    if (!arr[i].selected) {
      arr[i].selected = true;
      return arr[i];
    }
  }
}
// Mảng ví dụ
const myArray = [
  { value: 1, selected: false },
  { value: 2, selected: false },
  { value: 3, selected: false },
  { value: 4, selected: false },
  { value: 5, selected: false },
];
// Thực hiện chọn ngẫu nhiên một phần tử không lặp lại
for (let i = 0; i < myArray.length; i++) {
  const selectedElement = modernFisherYatesShuffle(myArray);
  console.log("Selected element:", selectedElement.value);
}
