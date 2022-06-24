function startTimer(){
    var counter = 75;
    setInterval(function() {
      counter--;
      if (counter >= 0) {
        span = document.getElementById("timer");
        span.innerHTML = counter + "seconds remaining";
      }
      if (counter === 0) {
          alert('sorry, out of time');
          clearInterval(counter);
      }
    }, 1000);
  }
  function start()
  {
      document.getElementById("timer").style="color:black;";
      startTimer();
  };






