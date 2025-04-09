const startBtn = document.querySelector('.startBtn')
const timerText = document.querySelector('span')

const ring = document.querySelector('.ring')

startBtn.addEventListener("click", ()=>{    
    timerId = setInterval(pomodoro, 1000) 
})

function updateProgress(timeinSeconds){
    rotate = 360 - 360/timeinSeconds
    ring.style.background = `conic-gradient(pink 5deg, #5106ff ${rotate}deg, #5106ff 360deg)`;
}

let timeinSeconds = 1500
let minute = 24
let seconds = 60
const pomodoro = ()=>{
    if(timeinSeconds){
        timeinSeconds--;
        seconds--;
        if(seconds==0){
            seconds = 59
            minute--;
            
        }
    }
    timerText.innerText = `${minute}:${seconds}`
    updateProgress(timeinSeconds)
}
