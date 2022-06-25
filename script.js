const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container')

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

//might need space here
let shuffledQuestions, currentQuestionsIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
currentQuestionsIndex++
setNextQuestions()
})



function startGame() {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() =>Math.random()- .5)
currentQuestionsIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestions()
}

function setNextQuestions(){
  resetState()
  showQuestions(shuffledQuestions[currentQuestionsIndex])
}

function showQuestions(question) {
questionElement.innerText = question.question
question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('btn')
  if (answer.correct) {
    button.dataset.correct = answer.correct
  }
  button.addEventListener('click', selectAnswers)
  answerButtonsElement.appendChild(button)
}) 
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}


function selectAnswers() {
const selectedButton = e.target
const correct = selectedButton.dataset.correct
setStatusClass(document.body, correct)
Array.from(answerButtonsElement.children).forEach(button => {
  setStatusClass(button, button.dataset.correct)
})
if (shuffledQuestions.length > currentQuestionsIndex +1) {
  nextButton.classList.remove('hide')
} else {
  startButton.innerText = 'Restart'
  startButton.classList.remove('hide')
 }
}


function setStatusClass(element, correct) {
  clearStatusClass(element)
  if(correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    questions: 'What is 2 + 2',
    answers: [
      {text: '4', correct: true},
      {text: '45', correct: false}
    ]
  },
  {
    questions: 'What is 5 + 5',
    answers: [
      {text: '10', correct: true},
      {text: '5', correct: false}
    ]
  },
  {
    questions: 'What is 8 + 8',
    answers: [
      {text: '16', correct: true},
      {text: '0', correct: false}
    ]
  }
]