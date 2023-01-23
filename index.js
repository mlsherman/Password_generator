const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordEl = document.getElementById("btn-generate")
let pwEl = document.getElementById("pw1")
let pw2El = document.getElementById("pw2")

let passwordLength = 12

function getRandomCharacter() {
    let randomChar = Math.floor( Math.random() * characters.length )
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()           
    }
    return randomPassword
}

function passwords() {
    const generatePasswordOne = generateRandomPassword()
    const generatePasswordTwo = generateRandomPassword()
    console.log(generatePasswordOne + " " + generatePasswordTwo)
    pwEl.textContent = generatePasswordOne 
    pw2El.textContent = generatePasswordTwo
}
