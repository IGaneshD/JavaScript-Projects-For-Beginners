let numBox = document.getElementById('numBox')
let minNum = document.getElementById('minNum')
let maxNum = document.getElementById('maxNum')
let genBtn = document.getElementById('genBtn')

genBtn.addEventListener('click', (genRandomNum))

function genRandomNum() {
    let min = parseInt(minNum.value)
    let max = parseInt(maxNum.value)
    numBox.value = Math.floor(Math.random()* (max - min + 1)) + min 
}


copyIcon.addEventListener('click', () => {
    if (numBox.value !== '') {
        
        navigator.clipboard.writeText(numBox.value);
        copyIcon.innerText = 'check';
        copyIcon.title = "Password Copied";

        setTimeout(() => {
            copyIcon.innerText = 'content_copy';
            copyIcon.title = "";
        }, 3000)
    }
})

