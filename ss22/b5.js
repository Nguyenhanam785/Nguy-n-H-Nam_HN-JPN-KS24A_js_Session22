let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sochan = 0;
let sole = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        sochan += arr[i];
    } else {
        sole += arr[i];
    }
}
console.log("Tổng các số chẵn:",+ sochan);
console.log("Tổng các số lẻ:",+ sole);