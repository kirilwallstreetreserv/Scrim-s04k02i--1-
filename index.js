/*TO do List

Toggle "symbols" and "numbers" on/off

*/
const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"];

let firstPass = document.getElementById("firstPassword");
let secondPass = document.getElementById("secondPassword");
let generateButton = document.getElementById("generateButton");
let copyText = document.getElementById("CopyText");
let bodyPasswords = document.querySelector(".bodyButtons");
let copyMessage = "Copied!";
let lengthPassword = 12; // Устанавливаем длину пароля по умолчанию

function copyToClipboard(text) {
    const tempInput = document.createElement("textarea");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    copyText.textContent = copyMessage;
}

let copyButtons = document.querySelectorAll(".copyButton");

copyButtons.forEach(button => {
    button.addEventListener("click", function () {
        const content = this.textContent;
        copyToClipboard(content);
    });
});

generateButton.addEventListener("click", function () { 
    bodyPasswords.style.display = "block";
    let firstGenPass = '';
    let secondGenPass = '';
    for (let i = 0; i < lengthPassword; i++) { // Используем корректное условие цикла
        let randomPassSecond = Math.floor(Math.random() * characters.length);
        let randomPassFirst = Math.floor(Math.random() * characters.length);
        firstGenPass += characters[randomPassFirst];
        secondGenPass += characters[randomPassSecond];
    }
    firstPass.textContent = firstGenPass;
    secondPass.textContent = secondGenPass;
});

function updateLength(length) {
    lengthPassword = parseInt(length); // Сохраняем длину в глобальной переменной
    document.getElementById('lengthValue').innerText = length; // Обновляем отображение длины
}