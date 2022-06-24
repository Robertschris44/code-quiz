const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

//might need space here
let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)

function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() =>Math.random()- .5)
currentQuestionsIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestions()
}

function setNextQuestions(){
  showQuestions(shuffledQuestions[currentQuestionsIndex])
}

function showQuestions(question) {
questionElement.innerText = question.question
}

function selectAnswers() {

}

const questions = [
  {
    questions: 'What is 2 + 2',
    answers: [
      {text: '4', correct: true},
      {text: '45', correct: false}
    ]
  }
]