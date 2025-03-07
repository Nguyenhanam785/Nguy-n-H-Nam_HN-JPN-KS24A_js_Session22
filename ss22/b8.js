let numbers = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let frequency = {};
for (let num of numbers) {
    frequency[num] = (frequency[num] || 0) + 1;
}
let maxCount = 0;
let mostFrequent = null;

for (let num in frequency) {
    if (
        frequency[num] > maxCount || 
        (frequency[num] === maxCount && num < mostFrequent)
    ) {
        maxCount = frequency[num];
        mostFrequent = Number(num);
    }
}

console.log("Phần tử xuất hiện nhiều nhất là: " + mostFrequent);