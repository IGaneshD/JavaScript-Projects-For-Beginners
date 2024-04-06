let lengthSlider = document.getElementById('lengthSlider')
let sliderValue = document.getElementById('sliderValue')

sliderValue.textContent = lengthSlider.value

lengthSlider.addEventListener("input", ()=>{
    sliderValue.textContent = lengthSlider.value
})

let checkboxes = document.querySelectorAll('.checkbox')


Array.from(checkboxes).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.innerText == 'radio_button_unchecked'){
            e.target.innerText = 'task_alt'
            e.target.nextElementSibling.nextElementSibling.checked = true

        }
        else{
            e.target.innerText = 'radio_button_unchecked'
            e.target.nextElementSibling.nextElementSibling.checked = false
        }
    })
})

let includeLabels = document.querySelectorAll('.row label')

Array.from(includeLabels).forEach(Element=>{
    Element.addEventListener('click',(e)=>{
        if(e.target.previousElementSibling.innerText == 'radio_button_unchecked'){
            e.target.previousElementSibling.innerText = 'task_alt'

        }
        else{
            e.target.previousElementSibling.innerText = 'radio_button_unchecked'
        }
    })
})


let generateBtn = document.getElementById('generateBtn')
let password = document.getElementById('password')

generateBtn.addEventListener('click', function(){
    let length = lengthSlider.value

    let uppercase = document.getElementById('uppercase').checked
    let lowercase = document.getElementById('lowercase').checked
    let symbols = document.getElementById('symbols').checked
    let numbers = document.getElementById('numbers').checked

    let password_generated = generatePassword(length, uppercase, lowercase, symbols, numbers)

    password.value = password_generated
})

function generatePassword(length, uppercase, lowercase, symbols, numbers){

    let charset = ""
    let string = ""

    if(uppercase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if(lowercase) charset += "abcdefghijklmnopqrstuvwxyz";
    
    if(symbols) charset += "!@#$%^&*()";
    
    if(numbers) charset += "0123456789";

    for(let i=0; i<length; i++){

       string += charset.charAt(Math.floor(Math.random()*charset.length))
    }

    return string;
    

}

let copyIcon = document.getElementById('copyIcon')

copyIcon.addEventListener('click', ()=>{
    if(password.value !=""){
        navigator.clipboard.writeText(password.value)
        copyIcon.innerText = 'check'

        setTimeout(()=>{
            copyIcon.innerText='content_copy'
        }, 3000)
    }
    
})