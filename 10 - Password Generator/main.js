let lengthSlider = document.getElementById('lengthSlider')
let sliderValue = document.getElementById('sliderValue')

sliderValue.textContent = lengthSlider.value

lengthSlider.addEventListener('input', ()=>{
    sliderValue.textContent = lengthSlider.value;
})

let checkboxes = document.querySelectorAll('.checkbox')

Array.from(checkboxes).forEach(Element  =>{
    Element.addEventListener('click', (e)=>{
        if(e.target.innerText == 'radio_button_unchecked'){
            e.target.innerText = "task_alt"
            e.target.nextElementSibling.nextElementSibling.setAttribute('checked',"")
            e.target.parentElement.classList.add('active')
            console.log(e.target.parentElement)
        }
        else{
            e.target.innerText="radio_button_unchecked";
            e.target.nextElementSibling.nextElementSibling.removeAttribute('checked')
            e.target.parentElement.classList.remove('active')
            console.log(e.target.parentElement)
        }
    })
})


let includeLabels = document.querySelectorAll('.includeLabel')

Array.from(includeLabels).forEach(Element =>{
    Element.addEventListener('click', (e)=>{
        if(e.target.previousElementSibling.innerText == 'radio_button_unchecked'){
            e.target.previousElementSibling.innerText = "task_alt"
            
            e.target.nextElementSibling.setAttribute('checked', "")
            e.target.parentElement.classList.add('active')
            console.log(e.target.parentElement)
        }else{
            e.target.previousElementSibling.innerText = "radio_button_unchecked"
            e.target.nextElementSibling.removeAttribute('checked')
            e.target.parentElement.classList.remove('active')
            console.log(e.target.parentElement)
        }
    })
})


let generateBtn = document.getElementById('generateBtn')

generateBtn.addEventListener('click', function() {
    let length = lengthSlider.value;
    console.log(length)
    let uppercase = document.getElementById('uppercase').checked;
    console.log(uppercase)
    let lowercase = document.getElementById('lowercase').checked;
    let numbers = document.getElementById('numbers').checked;
    let symbols = document.getElementById('symbols').checked;

    let password = generatePassword(length, uppercase, lowercase, numbers, symbols);
    document.getElementById('password').value = password;
});


function generatePassword(length, uppercase, lowercase, numbers, symbols) {
    let charset = '';
    let password = '';

    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()';

    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    return password;
}

let copyIcon = document.getElementById('copyIcon')

copyIcon.addEventListener('click', ()=>{
    if(password.value != "" || password.value.length >=1){
        navigator.clipboard.writeText(password.value);
        copyIcon.innerText = "check";
        copyIcon.title = "Password Copied";

        setTimeout(()=>{
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000)
    }
});