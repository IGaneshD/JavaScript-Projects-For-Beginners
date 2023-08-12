let displayInvested = document.getElementById('displayInvested')

let displayIntrest = document.getElementById('displayIntrest')

let investedValue = document.getElementById('investedValue')
let durationValue = document.getElementById('durationValue')
let intrestValue = document.getElementById('intrestValue')

let investedSlider = document.getElementById('investedSlider')
let durationSlider = document.getElementById('durationSlider')
let intrestSlider = document.getElementById('intrestSlider')

investedSlider.addEventListener('input',changeValue.bind(investedSlider, investedValue))
durationSlider.addEventListener('input',changeValue.bind(durationSlider, durationValue))
intrestSlider.addEventListener('input',changeValue.bind(intrestSlider, intrestValue))

investedValue.addEventListener('input', changeSlider.bind(investedValue, investedSlider))
durationValue.addEventListener('input', changeSlider.bind(durationValue, durationSlider))
intrestValue.addEventListener('input', changeSlider.bind(intrestValue, intrestSlider))

function changeSlider(destination, source){
   
        source.target.value = parseInt(source.target.value) < parseInt(source.target.min) ? source.target.min : source.target.value

        source.target.value = parseInt(source.target.value) > parseInt(source.target.max) ? source.target.max : source.target.value
    
    destination.value = source.target.value

    calculateIntrest()
}

function changeValue(destination, source){
    destination.value = source.target.value
    calculateIntrest()
}


calculateIntrest()

function calculateIntrest(){
    totalIntrest = Math.floor(parseInt(investedSlider.value) * Math.pow((1 + parseFloat(intrestSlider.value)/100) , parseInt(durationSlider.value))) - parseInt(investedSlider.value)

    displayIntrest.innerText = new Intl.NumberFormat('en-IN', {style:'currency', currency:'INR'}).format(totalIntrest)
    displayInvested.innerText = new Intl.NumberFormat('en-IN', {style:'currency', currency:'INR'}).format(investedSlider.value)
}