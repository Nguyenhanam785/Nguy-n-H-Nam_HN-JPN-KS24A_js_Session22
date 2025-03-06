
let number=Number(prompt("nhập mỗt chuỗi:"));

if (Number.isInteger(number)) {
    let arr =number.toString().split("");
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log("số lớn nhất là: " + max);
} else {
    console.log("không hợp lệ");
}
