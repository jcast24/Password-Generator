function getRandomLetterNum() {
    let hands = 'abcefghijklmnopqrstuvwxyz0123456789'
    let result = '';
    for (let i=0; i<hands.length; i++){
        result += hands.charAt(Math.floor(Math.random() * hands.length))
    }
    return result; 
}

console.log( getRandomLetterNum() )