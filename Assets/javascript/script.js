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
var questionOptions = document.querySelector(".question-options");
var start = document.querySelector(".start")

var questionIndex = 0;
var totalTime = 100;
var correctAnswer = 0;
var secondsLeft;

var questions = [
    {
    quizQuestion: "Who is known for creating the metal horns?",
    choices: ["A. Ronnie James Dio", "B. Ozzy Osbourne", "C. James Hetfield", "D. Rob Halford"],
    correct: "A"  
    },
    {
    quizQuestion: "Who are known as the Big 4 of thrash?",
    choices: ["A. Slipknot, Korn, System of a Down, Mudvayne", "B. Gojira, Lamb of God, Pantera, Masodon","C. Metallica, Anthrax, Slayer, Megadeth", "D. Death, Testament, Iron Maiden, Kreator"],
    correct: "C"    
    },
    {
    quizQuestion: "What is the name of the Iron Maiden mascot that is seen frequently on their album covers?",
    choices: ["A. The Maiden", "B. Eddie the Head","C. The Guy","D. Facebones"],
    correct: "B"    
    },
    {
    quizQuestion: "What band named their fanbase maggots?",
    choices: ["A. Slipknot", "B. Korn","C. Lamb of God","D. Mudvayne"],
    correct: "A"   
    },    
    {
    quizQuestion: "Believe it or not, the first band to ever play on all 7 continents was a metal band. Which band was it?",
    choices: ["A. Motorhead", "B. Black Sabbath","C. Kiss","D. Metallica"],
    correct: "D"   
    },    
];


function startQuiz() {
    questionIndex = 0;
     secondsLeft = totalTime;

     questionOptions.style.display = "block";
     
   

     var timeStart = setInterval(function() {
         secondsLeft--;
         timeLeft.textContent ="Time: " + secondsLeft;
         if (secondsLeft < 1){
             clearInterval(timeStart);
             gameOver();
         }
     },1000);

    showQuiz();
};

function showQuiz() {
nextQuestion (Math.floor(Math.random() * 5));
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
     else {
         secondsLeft -= 15;
         timeLeft.textContent ="Time: " + secondsLeft;
         checkAnswer.textContent = "That ain't it! A Metalhead would know the answer is: " + questions[questionIndex].correct;
     }
    console.log(correctAnswer)

    questionIndex++;
    nextQuestion();

    
};


function pickA() { answerCheck("A") };
function pickB() { answerCheck("B") };
function pickC() { answerCheck("C") };
function pickD() { answerCheck("D") };

function gameOver() {
    timeLeft.textContent = "Time: " + totalTime;
    highScore.textContent = "Final Score: " + correctAnswer;
};

startButton.addEventListener("click", startQuiz);
choiceA.addEventListener("click", pickA);
choiceB.addEventListener("click", pickB);
choiceC.addEventListener("click", pickC);
choiceD.addEventListener("click", pickD);