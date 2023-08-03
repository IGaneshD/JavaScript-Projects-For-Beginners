let cardNumber = document.querySelector('input');
let checkBtn = document.querySelector('button');
let msg = document.querySelector('.material-icons')


checkBtn.addEventListener('click', ()=>{
    number = cardNumber.value
    isvalid = null
    if(number.length < 8 || isNaN(number)){
        isvalid = false
    }
    else{
        isvalid = validateNumber(number)
    }
    msg.innerText = isvalid ? 'check' : 'dangerous'
    msg.style.color = isvalid ? 'green' : 'red';
    msg.classList.add('active');
})

function validateNumber(number){
    sum_even = 0
    sum_odd = 0

    for(i = number.length - 1 ; i>=0; i -= 2){
        sum_odd += parseInt(number[i])
    }

    for(i = number.length -2 ; i>=0; i -= 2){
        x = parseInt(number[i]) * 2
        if(x>=10){
            sum_even += 1 + x%10
        }
        else{
            sum_even += x
        }
    }
    total_sum = sum_even + sum_odd
    if(total_sum%10 == 0){
        return true
    }
    return false
}

cardNumber.addEventListener('click', ()=>{
    msg.classList.remove('active')
})