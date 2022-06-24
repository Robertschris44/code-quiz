(function() {
  function buildQuiz() {
    
    document.getElementById("startQuiz").style.visibility = "hidden"
    const output = [];
  
    myQuestions.forEach((currentQuestion, questionNumber) => {
      const answers = [];
  
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
        );
      }
  
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
      );
    });
  
    quizContainer.innerHTML = output.join("");
  }
    
    //this belongs here
    var quizContainer = document.getElementById("quiz");
    var myQuestions = [{
        question: "What is 1 +1?",
        answers: {
          a: "8",
          b: "25",
          c: "2"
        },
        correctAnswer: "c"
      },
      {
        question: "What is 4 x 4?",
        answers: {
          a: "8",
          b: "36",
          c: "16"
        },
        correctAnswer: "c"
      }
    ];
      document.getElementById('startQuiz').addEventListener('click',buildQuiz);
  }());
    
    