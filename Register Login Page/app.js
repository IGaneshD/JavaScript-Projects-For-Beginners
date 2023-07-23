let container = document.querySelector('.container');
let loginLink = document.querySelector('.login-link');
let regLink = document.querySelector('.register-link');
let btnPopup  = document.querySelector('.BtnLogin-popup');
let closeform = document.querySelector('.icon-close');

regLink.addEventListener('click',()=>{
    container.classList.add('active');
})

loginLink.addEventListener('click',()=>{
    container.classList.remove('active');
})

btnPopup.addEventListener('click',()=>{
    container.classList.add('active-popup');
})

closeform.addEventListener('click',()=>{
    container.classList.remove('active-popup');
})