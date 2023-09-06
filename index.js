const result = document.getElementById("result")
const generateButton = document.getElementById("generate-btn");


function getRandomLetterNum() {
    let characters = 'abcefghijklmnopqrstuvwxyz0123456789'
    let result = '';
    for (let i=0; i<characters.length; i++){
        result += characters[Math.floor(Math.random() * characters.length)]
    }
    return result; 
}

generateButton.addEventListener("click", function(){
    result.innerHTML = `${getRandomLetterNum()}`;
})
