let arr = [7, 5, 2, 9, 5, 7, 3, 4, 2, 6];

let uniqueArr = [...new Set(arr)]; 
uniqueArr.sort((a, b) => a - b);

console.log("Mảng sau khi loại bỏ phần tử trùng nhau và sắp xếp tăng dần:", uniqueArr);