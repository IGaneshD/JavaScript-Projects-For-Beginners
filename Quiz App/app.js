console.log("connected")

const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "What is the capital of France?",
        answers: [
            { text: "Madrid", correct: false },
            { text: "Berlin", correct: false },
            { text: "Paris", correct: true },
            { text: "Lisbon", correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: [
            { text: "Earth", correct: false },
            { text: "Mars", correct: true },
            { text: "Jupiter", correct: false },
            { text: "Venus", correct: false }
        ]
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        answers: [
            { text: "William Shakespeare", correct: true },
            { text: "Jane Austen", correct: false },
            { text: "Charles Dickens", correct: false },
            { text: "Mark Twain", correct: false }
        ]
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        answers: [
            { text: "Oxygen", correct: false },
            { text: "Carbon Dioxide", correct: true },
            { text: "Nitrogen", correct: false },
            { text: "Hydrogen", correct: false }
        ]
    },
    // {
    //     question: "Which is the smallest continent in the world?",
    //     answers: [
    //         { text: "Asia", correct: false },
    //         { text: "Australia", correct: true },
    //         { text: "Europe", correct: false },
    //         { text: "Antarctica", correct: false }
    //     ]
    // },
    // {
    //     question: "How many colors are there in a rainbow?",
    //     answers: [
    //         { text: "5", correct: false },
    //         { text: "6", correct: false },
    //         { text: "7", correct: true },
    //         { text: "8", correct: false }
    //     ]
    // },
    // {
    //     question: "What is the boiling point of water?",
    //     answers: [
    //         { text: "90°C", correct: false },
    //         { text: "100°C", correct: true },
    //         { text: "80°C", correct: false },
    //         { text: "120°C", correct: false }
    //     ]
    // },
    // {
    //     question: "Which instrument has keys, pedals, and strings?",
    //     answers: [
    //         { text: "Guitar", correct: false },
    //         { text: "Drum", correct: false },
    //         { text: "Piano", correct: true },
    //         { text: "Violin", correct: false }
    //     ]
    // },
    // {
    //     question: "Which festival is known as the Festival of Lights?",
    //     answers: [
    //         { text: "Holi", correct: false },
    //         { text: "Diwali", correct: true },
    //         { text: "Eid", correct: false },
    //         { text: "Christmas", correct: false }
    //     ]
    // }
];


let timerInterval;
const timerEl = document.getElementById('timer');
const timeBar = document.getElementById('time-bar');
let isAnswered = false



function ShowAnswer(){
    Array.from(document.getElementById("answer-buttons").children).forEach( button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
}


function startTimer() {
    let timeLeft = 3;
    const totalTime = 3;

    // Reset styles
    timerEl.innerText = timeLeft;
    timeBar.style.transition = 'none';
    timeBar.style.width = '100%';

    void timeBar.offsetWidth; // Force reflow

    // Animate full bar shrink over 3 seconds
    timeBar.style.transition = `width ${totalTime}s linear`;
    timeBar.style.width = '0%';

    // Countdown numbers every second
    timerInterval = setInterval(() => {
        timeLeft--;
        timerEl.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            timerEl.innerText = 0;

            if (!isAnswered) {
                ShowAnswer();
                setTimeout(ShowNextQuestion, 800);
            }
        }
    }, 1000);
}








const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const startBtn = document.getElementById("start-btn");
const startScreen = document.getElementById("start-screen");
const quizContainer = document.getElementById("app");




let currentQuestionIndex = 0;
let score = 0;


function resetState() {
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}


function  selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct")
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect")
    }


    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    isAnswered = true;
    setTimeout(()=>{ShowNextQuestion()}, 1000);
}

function showOptions(currentQuestion) {
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerHTML = answer.text
        button.classList.add("btn")
        answerButtons.appendChild(button)
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
    
}

function showQuestion() {
    startTimer()
    resetState()
    let currentQuestion = questions[currentQuestionIndex]
    // let questionNo = currentQuestionIndex + 1;
    
    questionElement.innerHTML =  currentQuestion.question
    showOptions(currentQuestion)
}

function startQuiz() {
    nextButton.style.display = "none";
    timerEl.style.visibility = "visible";
    timeBar.style.visibility = "visible";
    currentQuestionIndex = -1;
    score = 0;
    ShowNextQuestion()
}

function showScore() {
    timerEl.style.visibility = "hidden";
    timeBar.style.visibility = "hidden";

    clearInterval(timerInterval)
    resetState();
    questionElement.innerHTML = `Score: ${score}`
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";

}


startBtn.addEventListener("click", () => {
    startScreen.style.display = "none";
    quizContainer.style.display = "block";
    quizContainer.classList.add("fade-in");
    startQuiz()
  });

nextButton.addEventListener("click", (e)=>{
    startQuiz()
})

function ShowNextQuestion(){
    debugger
    clearInterval(timerInterval)
    isAnswered = false
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
    showQuestion();
    }
    else{
        showScore()
    }
    
}





