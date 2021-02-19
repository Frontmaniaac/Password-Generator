const passInput = document.querySelector(".passwordWrap__password");
const passButton = document.querySelector(".generateButton");
const howMany = document.querySelector(".howManyChar")
const rangeBar = document.querySelector(".rangeBar")
const upperCheck = document.querySelector(".uppercaseCheck")
const lowerCheck = document.querySelector(".lowercaseCheck")
const numbersCheck = document.querySelector(".numbersCheck")
const symbolsCheck = document.querySelector(".symbolsCheck")
const strengthBar = document.querySelector(".strengthBar")
const copyBtn = document.querySelector(".copyBtn")
howMany.addEventListener('input', syncChar)
rangeBar.addEventListener('input', syncChar)

copyBtn.addEventListener("click", () => {
    passInput.select()
    document.execCommand("copy");
})

function syncChar(e) {
    howMany.value = e.target.value
    rangeBar.value = e.target.value
    passInput.value = generatePassword();
    checkStrength()
}
passButton.addEventListener('click', () => {
    passInput.value = generatePassword()
    checkStrength()

})

function checkStrength() {
    if (howMany.value < 5) {
        strengthBar.style = "width:20%;background:rgb(238, 70, 70);box-shadow: 0 2px 5px rgb(238, 70, 70);"
    } else if (howMany.value < 10) {
        strengthBar.style = "width:45%;background:rgb(248, 175, 58);box-shadow: 0 2px 5px rgb(248, 175, 58);"
    } else if (howMany.value < 15) {
        strengthBar.style = "width:65%;background:rgb(169, 246, 67);box-shadow: 0 2px 5px rgb(169, 246, 67);"
    } else if (howMany.value < 20) {
        strengthBar.style = "width:85%;background:rgb(169, 246, 67);box-shadow: 0 2px 5px rgb(169, 246, 67);"
    } else if ((howMany.value > 20) && (numbersCheck.checked || symbolsCheck.checked)) {
        strengthBar.style = "width:100%;background:rgb(169, 246, 67);box-shadow: 0 2px 5px rgb(169, 246, 67);"
    }
}

function generatePassword() {
    let password = ''
    let myChars = lowerCaseChars
    if (upperCheck.checked) myChars = myChars.concat(upperCaseChars)
    if (numbersCheck.checked) myChars = myChars.concat(numbersChars)
    if (symbolsCheck.checked) myChars = myChars.concat(specialChars)
    myChars.sort((a, b) => {
        return a - b
    })
    for (i = 0; i <= parseInt(howMany.value - 1); i++) {
        let randVal = Math.floor(Math.random() * myChars.length)
        password += String.fromCharCode(myChars[randVal])
    }
    return password
}
const upperCaseChars = arrayCharacters(65, 90)
const lowerCaseChars = arrayCharacters(97, 122)
const numbersChars = arrayCharacters(48, 57)
const specialChars = arrayCharacters(33, 47)

function randomNumber(tab) {
    const passChar = Math.floor(Math.random() * (tab[tab.length - 1] - tab[0]) + tab[0])
    return passChar
}

function arrayCharacters(low, high) {
    const array = []
    for (i = low; i <= high; i++) {
        array.push(i)
    }
    return array
}
passInput.value = generatePassword();
checkStrength();