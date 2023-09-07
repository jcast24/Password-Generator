const result_one = document.getElementById("result1");
const result_two = document.getElementById("result2");
const result_three = document.getElementById("result3");
const result_four = document.getElementById("result4");

const generateButton = document.getElementById("generate-btn");

const input_value = document.getElementById("input-length");

const uppercaseCheckbox = document.getElementById("uppercaseCheck");

const characters = 'abcefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+';

function generateRandomCharacters() {
    let randomCharacters = characters[Math.floor(Math.random() * characters.length)];
    return randomCharacters;
}

function setInputLength() { 
    let value = input_value.value;

    if (value === ' ') {
        value = 12;
    }

    return value;
}

function generatePassword(length) {
    let password = '';
    for (let i=0; i<length; i++) {
        password += generateRandomCharacters();
    }
    return password;
}

function renderPass() {
    let length = setInputLength();
    result_one.innerHTML = generatePassword(length);
    result_two.innerHTML = generatePassword(length);
    result_three.innerHTML = generatePassword(length);
    result_four.innerHTML = generatePassword(length);

}

generateButton.addEventListener("click", renderPass);
