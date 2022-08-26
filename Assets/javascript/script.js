var startButton = document.querySelector(".start-button");
var quizQuestion = document.querySelector(".quiz-question");
var choiceA = document.querySelector(".choice-A");
var choiceB = document.querySelector(".choice-B");
var choiceC = document.querySelector(".choice-C");
var choiceD = document.querySelector(".choice-D");
var checkAnswer = document.querySelector(".check-answer");
var timeLeft = document.querySelector(".time-left"); 
var highScore = document.querySelector(".highscore-screen");
var initialsEl = document.querySelector("#initials-submit");
var questionOptions = document.querySelector(".question-options");
var startEl = document.querySelector(".start");
var title = document.querySelector("#question");
var topEl = document.getElementById("top");
var finishedEl = document.querySelector(".finished");
var scoreFinal = document.querySelector("#time-final");
var questionIndex = 0;
var totalTime = 100;
var correctAnswer = 0;
var secondsLeft;

//Above are the global variables that get called throughout the javascript as well as where i utilize querySelector and getElementbyId to pull the elements from my HTML//

topEl.classList.add("hide");
questionOptions.classList.add("hide");
finishedEl.classList.add("hide");

//Above is where I hide parts of my HTML so that only sections are shown so the entire quiz could fit on 1 html.//


// Below is the variable for my questions that will be pulled to the ul on my HTML when the quiz starts//

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

// Below is the timer and how it starts.//

var timeStart = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent ="Time: " + secondsLeft;
    if (secondsLeft < 1){
        clearInterval(timeStart);
    }
},1000);

function startQuiz() {
    questionIndex = 0;
    secondsLeft = totalTime;

topEl.classList.add("show");
questionOptions.classList.add("show");
startEl.classList.add("hide");

// Above is where i continue to use classList to alter my HTML so that the questions and timer are the only ones that are showing.//

    showQuiz();
};

function showQuiz() {
nextQuestion ();
};

//This function is what leads to the next question.//

function nextQuestion() {
    if (questionIndex < questions.length) {
        quizQuestion.textContent = questions[questionIndex].question;
        title.textContent = questions[questionIndex].quizQuestion;
        choiceA.textContent = questions[questionIndex].choices[0];
        choiceB.textContent = questions[questionIndex].choices[1];
        choiceC.textContent = questions[questionIndex].choices[2];
        choiceD.textContent = questions[questionIndex].choices[3];  
    } else {
        clearInterval(timeStart); 
        gameOver();
    }

};

// Here is where my answerCheck is where if you get a question right you get a message showing so and if you get one wrong a message will show for that as well.//

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
  

    questionIndex++;
    nextQuestion();

    
};


function pickA() { answerCheck("A") };
function pickB() { answerCheck("B") };
function pickC() { answerCheck("C") };
function pickD() { answerCheck("D") };

// Here is where my gameOver function is where when the game ends it will show your score and shows the last codes for the classList to only show the gameOver screen.

function gameOver() {
    topEl.classList.add("hidden");
    questionOptions.classList.add("hidden");
    var timeFinal = document.querySelector("#time-final");
    timeFinal.textContent = "Final Score: " + secondsLeft;
    finishedEl.classList.add("show");


};


// Here are my addEventListeners to make my buttons function with the rest of the program.//

startButton.addEventListener("click", startQuiz);
choiceA.addEventListener("click", pickA);
choiceB.addEventListener("click", pickB);
choiceC.addEventListener("click", pickC);
choiceD.addEventListener("click", pickD);
initialsEl.addEventListener("click", function(event){
event.preventDefault();

// This was my attempt at creating the highscores in localStorage. Sadly, I was unsuccessful and ran out of time to finish this.//

var user = {
    ScoreEl: scoreFinal.value,
    initEl: highScore.value
}

localStorage.setItem("user", JSON.stringify(user));

});
