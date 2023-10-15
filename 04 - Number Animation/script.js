const item = document.querySelector('.number')

const value = parseInt(item.dataset.value)
const increment = Math.ceil(value/1000)

let currentValue = 0

const intervalId = setInterval(()=>{
    currentValue += increment

    if(currentValue == value){
        item.textContent = `${value}+`
        clearInterval(intervalId)
return;
    }
    item.textContent = `${currentValue}`
}, 1)