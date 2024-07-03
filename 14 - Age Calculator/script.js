console.log('connected')

let dob = document.getElementById('date')
let btn = document.querySelector('button')
let ageDisplay = document.getElementById('resultDisplay')


dob.max = new Date().toISOString().split("T")[0]


function calculateAge(dateofBirth){
    // console.log(dateofBirth)
    let dob = new Date(dateofBirth)
    dobYear = dob.getFullYear()
    dobMonth = dob.getMonth()
    dobDate = dob.getDate()

    let today = new Date()
    currentYear = today.getFullYear()
    currentMonth = today.getMonth()
    currentDate = today.getDate()


    let year, month, date

    year = currentYear - dobYear

    if(currentMonth<dobMonth){
        month = currentMonth + 12 - dobMonth
        currentYear -=1
    }
    else{
        month = currentMonth - dobMonth
    }

    if(dobDate>currentDate){
        date = currentDate + getDaysInMonth(year, month, 0) - dobDate
        month -= 1
    }
    else{
        date = currentDate - dobDate
    }

    year = currentYear - dobYear

    let yearText = monthText = daysText = ''

    if(year) yearText = `<span>${year}</span> years`
    if(month) monthText = `<span>${month}</span> months`
    if(date) daysText = `<span>${date}</span> days`

    ageDisplay.style.visibility = 'visible'
    ageDisplay.innerHTML = `You are ${yearText} ${monthText} ${daysText} old`
}

function getDaysInMonth(year, month, day){
    return new Date(year, month, day).getDate()
}




btn.addEventListener("click", ()=>{
    if(dob.value)
    {
        calculateAge(dob.value)
    }
    else{
        alert('Please Select Date of Birth')
    }
})