let displayDays = document.querySelector('#displayDays');
let displayHrs = document.querySelector('#displayHours');
let displayMins = document.querySelector('#displayMinutes');
let displaySecs = document.querySelector('#displaySeconds');

let [days,hours,minutes,seconds] = [parseInt(displayDays.value), parseInt(displayHrs.value),parseInt(displayMins.value),parseInt(displaySecs.value)]

let string = ''
clicked = ''
displayDays.addEventListener('click', ()=>{
    clicked = displayDays
    string = ''
});
displayHrs.addEventListener('click', ()=>{
    clicked = displayHrs
    string = ''
});
displayMins.addEventListener('click', ()=>{
    clicked = displayMins
    string = ''
});
displaySecs.addEventListener('click', ()=>{
    clicked = displaySecs
    string = ''
});

//Access all the Buttons
let buttons = document.querySelectorAll('.inputRow button');

let arr = Array.from(buttons);

arr.forEach(button => {
    button.addEventListener('click', (b)=>{
        if (b.target.innerText == 'backspace'){
            string = string.substring(0, string.length - 1);
            clicked.value = string == '' ?  '00':string;
        }
        else{
            string += b.target.innerText;
            clicked.value = string;
            
        }
        if(displaySecs.value>59){
                displaySecs.value = 59;
                string = '59'
        }
        if(displayMins.value>59){
                displayMins.value = 59;
                string = '59'
            }
        if(displayHrs.value>23){
                displayHrs.value = 23;
                string = '23'
            }
        if(displayDays.value>31){
            displayDays.value = 31;
            string = '31'
        }
        

    })
});


//Accessing Buttons
const startBtn = document.querySelector('#startBtn');
const stopBtn = document.querySelector('#stopBtn');
const resetBtn = document.querySelector('#resetBtn');

//Start Stop and Reset The Timer
const inputbtnWrapper = document.querySelector('.inputButtons');
const displayWrapper = document.querySelector('.timerDisplay');
let timerId = null;
startBtn.addEventListener('click',()=>{
    let [days,hours,minutes,seconds] = [parseInt(displayDays.value), parseInt(displayHrs.value),parseInt(displayMins.value),parseInt(displaySecs.value)]
    if(timerId !==null){
        clearInterval(timerId);
    }
    inputbtnWrapper.classList.add('non-active');
    displayWrapper.classList.add('activeTimer');
    TotalSeconds = days*86400 + hours*3600 + minutes*60 + seconds;
    timerId = setInterval((timer),1000);
});

function timer(){
    updateDays = Math.floor(TotalSeconds/86400)
    updateHours = Math.floor(TotalSeconds % 86400 / 3600 )
    updateMinutes = Math.floor(TotalSeconds % 3600 / 60)
    updateSeconds = Math.floor(TotalSeconds % 60)
    if (TotalSeconds==0){
        clearInterval(timerId);
        LaunchMsg();
    }
    displayDays.value = updateDays;
    displayHrs.value = updateHours;
    displayMins.value = updateMinutes;
    displaySecs.value = updateSeconds;
    TotalSeconds--;


}

stopBtn.addEventListener('click',()=>{
    clearInterval(timerId);
    inputbtnWrapper.classList.remove('non-active');
    displayWrapper.classList.remove('activeTimer');
})

resetBtn.addEventListener('click',()=>{
    days = 0
    hours = 0
    minutes = 0
    seconds = 0
    clearInterval(timerId);
    displayDays.value = '00';
    displayHrs.value = '00';
    displayMins.value = '00';
    displaySecs.value = '00';
    inputbtnWrapper.classList.remove('non-active');
    displayWrapper.classList.remove('activeTimer');
});


const wrapper = document.querySelector('.wrapper');
const body = document.querySelector('body');
const msg_wrapper = document.querySelector('.msg-wrapper');
const msg = document.querySelector('.msg-wrapper h1')
const backbtn = document.querySelector('.msg-back-btn');

backbtn.addEventListener('click', ()=>{
    wrapper.classList.remove('wr-non-active');
    body.classList.remove('new-body');
    msg_wrapper.classList.remove('active');
    msg.classList.remove('active');
    inputbtnWrapper.classList.remove('non-active');
    displayWrapper.classList.remove('activeTimer');

});

function LaunchMsg(){
    wrapper.classList.add('wr-non-active');
    body.classList.add('new-body');
    msg_wrapper.classList.add('active');
    msg.classList.add('active');

}
    
