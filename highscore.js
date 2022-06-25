const highscoreList = document.getElementById('highscoresList');
const highScores = JSON.parse(localStorage.getItem('highscores')) || [];

highScoresList.innerHTML = highScores
  .map(score => {
    return '<lis class = "high-score" > $ { score.name} $ {score.score } </li>';
            
  })
  .join("")
    