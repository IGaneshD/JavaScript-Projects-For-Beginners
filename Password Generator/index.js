let inputSlider = document.getElementById('inputSlider')
let sliderValue = document.getElementById('sliderValue')
let passBox = document.getElementById('passBox')

let genBtn = document.getElementById('genBtn')

// let copyIcon = document.getElementById('copyIcon');



//showing the slider Value
sliderValue.textContent = inputSlider.value

inputSlider.addEventListener('input', (slideValue))
function slideValue() {
    sliderValue.textContent = inputSlider.value
}

genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

let lowerChars = 'abcdefhgijklmnopqarstuvwxyz'
let upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let allNumbers = '0123456789'
let allSymbols = '@!#$%&*_-~'

// Function to generate Password
function generatePassword() {

    let genPassword = "";

    let allChars = lowerChars + upperChars + allNumbers + allSymbols;

    let i = 0
    while (i < inputSlider.value) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
        i++;
    }
    
    return genPassword;
}

copyIcon.addEventListener('click', () => {
    if (passBox.value !== '') {
        
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = 'check';
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerText = 'content_copy';
            copyIcon.title = "";
        }, 3000)
    }
})