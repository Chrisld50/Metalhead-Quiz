var startButton = document.querySelector(".start-button");
var quizQuestion = document.querySelector(".quiz-question");
var choiceA = document.querySelector(".choice-A");
var choiceB = document.querySelector(".choice-B");
var choiceC = document.querySelector(".choice-C");
var choiceD = document.querySelector(".choice-D");
var checkAnswer = document.querySelector(".check-answer");
var timeLeft = document.querySelector(".time-left"); 
var highScore = document.querySelector(".highscore-screen");
var timeUp = document.querySelector(".times-up");
var inititals = document.querySelector(".intital-submit");

var questionIndex = 0;
var totalTime = 101;
var correctAnswer = 0;

var questions = [
    {
    quizQuestion: "Who is known for creating the metal horns?",
    choices: ["A. Ronnie James Dio", "B. Ozzy Osbourne", "C. James Hetfield", "D. Rob Halford"],
    correct: 0  
    },
    {
    quizQuestion: "Who are known as the Big 4 of thrash?",
    choices: ["A. Slipknot, Korn, System of a Down, Mudvayne", "B. Gojira, Lamb of God, Pantera, Masodon","C. Metallica, Anthrax, Slayer, Megadeth", "D. Death, Testament, Iron Maiden, Kreator"],
    correct: 2    
    },
    {
    quizQuestion: "What is the name of the Iron Maiden mascot that is seen frequently on their album covers?",
    choices: ["A. The Maiden", "B. Eddie the Head","C. The Guy","D. Facebones"],
    correct: 1    
    },
    {
    quizQuestion: "What band named their fanbase maggots?",
    choices: ["A. Slipknot", "B. Korn","C. Lamb of God","D. Mudvayne"],
    correct: 0    
    },    
    {
    quizQuestion: "Believe it or not, the first band to ever play on all 7 continents was a metal band. Which band was it?",
    choices: ["A. Motorhead", "B. Black Sabbath","C. Kiss","D. Metallica"],
    correct: 3    
    },    
];


function startQuiz() {
    questionIndex = 0;
    // //totalTime = 100;
    // timeLeft.textContent = totalTime;
    // inititals.textContent = "";

    // var timeStart = setInterval(function() {
    //     totalTime--;
    //     timeLeft.textContent = totalTime;
    //     if (totalTime <= 0){
    //         clearInterval(timeStart);
    //         if (questionIndex < questions.length -1) {
    //             gameOver();
    //         }
    //     }
    // },1000);

    showQuiz();
};

function showQuiz() {
    nextQuestion();
};

function nextQuestion() {
    if (questionIndex < questions.length) {
        quizQuestion.textContent = questions[questionIndex].question;
        choiceA.textContent = questions[questionIndex].choices[0];
        choiceB.textContent = questions[questionIndex].choices[1];
        choiceC.textContent = questions[questionIndex].choices[2];
        choiceD.textContent = questions[questionIndex].choices[3];  
    } else {
        gameOver();
    }

};

function answerCheck(answer) {
    if (answer === questions[questionIndex].correct) {
        correctAnswer++;
        checkAnswer.textContent = "You got it!";
    } 
    // else {
    //     totalTime -= 20;
    //     timeLeft.textContent = totalTime;
    //     checkAnswer.textContent = "That ain't it! A Metalhead would know the answer is: " + questions[questionIndex].answer;
    // }
    console.log(correctAnswer)

    questionIndex++;
    nextQuestion();

    
};

function pickA() { answerCheck(0) };
function pickB() { answerCheck(1) };
function pickC() { answerCheck(2) };
function pickD() { answerCheck(3) };

function gameOver() {
    highScore.textContent = correctAnswer;
};

startButton.addEventListener("click", startQuiz);
choiceA.addEventListener("click", pickA);
choiceB.addEventListener("click", pickB);
choiceC.addEventListener("click", pickC);
choiceD.addEventListener("click", pickD);