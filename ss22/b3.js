let userInput = prompt("Nhập vào dãy số: ");

if (isNaN(userInput) || userInput.includes(" ")) {
    console.log("Dãy không hợp lệ");
} else {
    let reversed = userInput.split("").reverse().join("");
    console.log(reversed);
}