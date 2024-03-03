const quizWrapper = document.querySelector(".container");
const optionWrapper = document.querySelector(".option-container");
const questionDisplay = document.querySelector(".question-display");
const timerDisplay = document.querySelector(".timer-container h1");
const startButton = document.querySelector(".start-button");
const finishGameWrapper = document.querySelector(".finish-game");
const bestScore = document.querySelector(".best-score");

let currentQuestionIndx = 0;
let score;//score
let time; //minute
let sekund;//sekund
let maxScore = localStorage.getItem("score");//bes score
let choices = ["A", "B", "C", "D"];
bestScore.textContent = `Your Best Score: ${maxScore}`;

// Start Game Function
function startTheGame() {
  time = 30;
  sekund = 60;
  score = 0;
  currentQuestionIndx = 0;
  finishGameWrapper.style.display = "none";
  startButton.parentElement.style.display = "none";
  quizWrapper.style.display = "flex";
  renderQuestion();
}

// Finish Game Function
function finishTheGame() {
  quizWrapper.style.display = "none";
  finishGameWrapper.style.display = "flex";
  finishGameWrapper.children[0].textContent = `${score} correct of 45 questions`;
  finishGameWrapper.children[1].addEventListener("click", startTheGame);
  finishGameWrapper.children[2].addEventListener(
    "click",
    saveScoreToLocaleStorage
  );
}

// Save the score to the local storage
function saveScoreToLocaleStorage() {
  window.localStorage.setItem("score", score);
  maxScore = window.localStorage.getItem("score");
  bestScore.textContent = `Your Best Score: ${maxScore}`;
}

// Render the questions
function renderQuestion() {
  const currentQuestion = questions[currentQuestionIndx];
  questionDisplay.textContent = currentQuestion.question;
  optionWrapper.innerHTML = "";
  for (let i = 0; i < currentQuestion.options.length; i++) {
    const btn = document.createElement("button");
    btn.innerText = choices[i] + ") " + currentQuestion.options[i];
    optionWrapper.appendChild(btn);
    btn.addEventListener("click", checkAnswer);
  }
}

// Timer function
function timer() {
  sekund--;
  if (sekund == 0 && time > 0) {
    time--;
    sekund = 59;
  }
  timerDisplay.innerText =
    addZeroToNumber(time) + ":" + addZeroToNumber(sekund);
  if (time == 0 && sekund == 0) {
    finishTheGame();
  }
}
setInterval(timer, 1000);

// Add zero to number function
function addZeroToNumber(number) {
  if (number < 10) {
    return "0" + number;
  }
  return number;
}

// Check the answers function
function checkAnswer(e) {
  const answer = e.target.innerText
    .split(" ")
    .filter((_, indx) => indx !== 0)
    .join(" ");
  if (currentQuestionIndx < questions.length) {
    if (answer === questions[currentQuestionIndx].answer) {
      score++;
    }
    currentQuestionIndx++;
    renderQuestion();
  } else {
    finishTheGame();
  }
}


// Start btn
startButton.addEventListener("click", startTheGame);
