
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = upperCase.toLowerCase()
const numbers = "1234567890"
const specialChar = "!@#$%^&*()_+}{:;'?/<>"
const passwordLength = 12

//selection elements
let inputPassword = document.getElementById("password")
let button = document.querySelector("button")
let copyIcon = document.querySelector(".display img")

function eventLIstener(){
    button.addEventListener("click", generatePassword)
    copyIcon.addEventListener("click", copyPassword)
}

eventLIstener()

function generatePassword(){
    let password = "";
    password = password + upperCase[Math.floor(Math.random() * upperCase.length)]
    password = password + lowerCase[Math.floor(Math.random() * lowerCase.length)]
    password = password + numbers[Math.floor(Math.random() * numbers.length)]
    password = password + specialChar[Math.floor(Math.random() * specialChar.length)]
    
    while(passwordLength > password.length){
        let allChar = upperCase + lowerCase + numbers + specialChar + passwordLength;
        password = password + allChar[Math.floor(Math.random() * allChar.length)]        
    }
    inputPassword.value = password
}

function copyPassword(){
    inputPassword.select();
    document.execCommand("copy")    
}

