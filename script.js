// const startButton = document.getElementById('start-btn')
// const questionContainerElement = document.getElementById('question-container')
// const nextButton = document.getElementById('next-btn')

// const questionElement = document.getElementById('question')
// const answerButtonsElement = document.getElementById('answer-buttons')

// //might need space here
// let shuffledQuestions, currentQuestionsIndex

// startButton.addEventListener('click', startGame)
// nextButton.addEventListener('click', () => {
// currentQuestionsIndex++
// setNextQuestions()
// })

// function startGame() {
// startButton.classList.add('hide')
// shuffledQuestions = questions.sort(() =>Math.random()- .5)
// currentQuestionsIndex = 0
// questionContainerElement.classList.remove('hide')
// setNextQuestions()
// }

// function setNextQuestions(){
//   resetState()
//   showQuestions(shuffledQuestions[currentQuestionsIndex])
// }

// function showQuestions(question) {
// questionElement.innerText = question.question
// question.answers.forEach(answer => {
//   const button = document.createElement('button')
//   button.innerText = answer.text
//   button.classList.add('btn')
//   if (answer.correct) {
//     button.dataset.correct = answer.correct
//   }
//   button.addEventListener('click', selectAnswers)
//   answerButtonsElement.appendChild(button)
// }) 
// }

// function resetState() {
//   clearStatusClass(document.body)
//   nextButton.classList.add('hide')
//   while (answerButtonsElement.firstChild) {
//     answerButtonsElement.removeChild
//     (answerButtonsElement.firstChild)
//   }
// }


// function selectAnswers() {
// const selectedButton = e.target
// const correct = selectedButton.dataset.correct
// setStatusClass(document.body, correct)
// Array.from(answerButtonsElement.children).forEach(button => {
//   setStatusClass(button, button.dataset.correct)
// })
// if (shuffledQuestions.length > currentQuestionsIndex +1) {
//   nextButton.classList.remove('hide')
// } else {
//   startButton.innerText = 'Restart'
//   startButton.classList.remove('hide')
//  }
// }


// function setStatusClass(element, correct) {
//   clearStatusClass(element)
//   if(correct) {
//     element.classList.add('correct')
//   } else {
//     element.classList.add('wrong')
//   }
// }

// function clearStatusClass(element) {
//   element.classList.remove('correct')
//   element.classList.remove('wrong')
// }
//keep questions
var questionEl = document.getElementById("question");
var btnA = document.querySelector(".btnA");
var btnB = document.querySelector(".btnB");
var btnC = document.querySelector(".btnC");
var btnD = document.querySelector(".btnD");

var timerEl = document.getElementById("timer");
var startBtn = document.getElementById("start-btn");
var time = 75;
var score = time;

var initialInput = document.getElementById("initial-input");
var initialButton = document.getElementById("init-btn");

document.getElementById("start-btn").addEventListener("click", function(){
  startQuiz();
});



var questions = [
  {
    question: 'What is 2 + 2',
    answers: [ "45", "30", "4", "6" ],
    correct: "4"
  },
  {
    question: 'What is 4 + 4',
    answers: [ "45", "30", "8", "6" ],
    correct: "8"
  },
  {
    question: 'What is 2 + 2',
    answers: [ "45", "30", "4", "6" ],
    correct: "4"
  },
  {  
    question: 'What is 2 + 2',
    answers: [ "45", "30", "4", "6" ],
    correct: "4"
  },
];

var currentQuestionsIndex = 0;

function startQuiz(){
  timerID =setInterval(startTime, 1000);
  setQuestions();
};

function setQuestions() {
  var currentQuestion = questions[currentQuestionsIndex];
  questionEl.textContent = currentQuestion.question;
  btnA.textContent = questions[currentQuestionsIndex].answers[0];
  btnB.textContent = questions[currentQuestionsIndex].answers[1];
  btnC.textContent = questions[currentQuestionsIndex].answers[2];
  btnD.textContent = questions[currentQuestionsIndex].answers[3];

};

function answerCheck(selectedAnswer){
  var correctAnswer = questions[currentQuestionsIndex].correct;
  if(selectedAnswer === correctAnswer){
    alert("correct");
    score += 5;
  }else {
    alert("incorrect");
    time -= 5;
  }
  if(currentQuestionsIndex === questions.length){
    alert("Your score is" + score);
    endQuiz();
  }else {
    currentQuestionsIndex++
    setQuestions();
  }
};

function endQuiz(){
  clearInterval(time);
};


var startTime = function(){
  if(time > 0){
    time -= 1;
    document.getElementById("timer").innerHTML = time;
  }else {
    clearInterval(timerID);
    alert("time is us");
  }
}

btnA.addEventListener("click", function(){
  answerCheck(btnA.textContent);
});

btnB.addEventListener("click", function(){
  answerCheck(btnB.textContent);
});

btnC.addEventListener("click", function(){
  answerCheck(btnC.textContent);
});

btnD.addEventListener("click", function(){
  answerCheck(btnD.textContent);
});

function saveScore(){
  var initials = document.getElementById("initial-input").value;
  localStorage.setItem(score, initials);
  startQuiz();
}