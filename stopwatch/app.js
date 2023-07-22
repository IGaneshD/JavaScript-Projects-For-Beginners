let displaytime = document.getElementById('displayTime');
let resetBtn = document.getElementById('resetBtn');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');

let timerId = null;

let [msec, seconds, minutes] = [0,0,0]
startBtn.addEventListener('click',()=>{
    if(timerId !==null){
        clearInterval(timerId);
    }
    timerId = setInterval(stopWatch,10);
})

resetBtn.addEventListener('click',()=>{
    clearInterval(timerId)
    msec = 0
    seconds =0
    minutes = 0
    displaytime.innerHTML = '00:00:00'
})
stopBtn.addEventListener('click',()=>{
    clearInterval(timerId)
});
function stopWatch(){
    msec++;
    if(msec==100){
        seconds++;
        msec = 0;
        if(seconds==60){
            minutes++;
            seconds = 0;
        }
    }
    let mstring = msec <10 ? '0' + msec :msec
    let sstring = seconds <10 ? '0' + seconds :seconds
    let minstring = minutes <10 ? '0' + minutes :minutes

    displaytime.innerHTML = minstring + ':' + sstring + ':' + mstring;
}