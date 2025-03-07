let number = prompt("Nhập một chuỗi:");

if (number && !isNaN(Number(number)) && Number(number) >= 0) { 
    let arr = number.split("").map(Number);
    let frequency = {};
    let maxCount = 0;
    let mostFrequent = null;
    for (let num of arr) {
        frequency[num] = (frequency[num] || 0) + 1;
        if (frequency[num] > maxCount) {
            maxCount = frequency[num];
            mostFrequent = num;
        }
    }

    console.log("Số xuất hiện nhiều nhất là: " + mostFrequent);
} else {
    console.log("Không hợp lệ");
}