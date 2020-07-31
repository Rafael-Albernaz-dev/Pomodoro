// Principal variables
seconds = 60
minutes = 25

// Audio files
const click = new Audio("../audio/click.mp3");
const alarm = new Audio("../audio/bell.mp3");

function template() { 
  
  if(minutes < 10 ) {
    document.querySelector(".minutes").innerHTML = "0" + minutes;
  } else {
    document.querySelector(".minutes").innerHTML = minutes;
  }
  // document.querySelector(".seconds").innerHTML = seconds;
}

function playTimer() {
  click.play();

  seconds = seconds - 1;
  minutes = minutes - 1;

  if(minutes < 10) {

    document.querySelector(".minutes").innerHTML = "0" + minutes;
  } else {
    document.querySelector(".minutes").innerHTML = minutes;
  }

  if(seconds < 10 && seconds > 0 ) {
    document.querySelector(".seconds").innerHTML = "0" + seconds;
  } else {
    document.querySelector(".seconds").innerHTML = seconds;
  }
  
  

  let  minutes_interval = setInterval(minutesTimer, 60000);
  let seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;

  }

  function secondsTimer() {
    seconds = seconds - 1;

    if(seconds < 10 && seconds > 0 ) {
      document.querySelector(".seconds").innerHTML = "0" + seconds;
    } else {
      document.querySelector(".seconds").innerHTML = seconds;
    }

    if(seconds <= 0 ) {
      if(minutes <= 0 ) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
        breakTimer(true);

        document.querySelector(".done").innerHTML = "Sessão encerrada! Intervalo obrigatório! <a href='#' class='songs' data-toggle='modal' data-target='#exampleModal'>Lista de musicas</a href='#'>"
        
        document.querySelector(".done").classList.add("show_message");
        
        alarm.play();
      }
      seconds = 60;
    }
    
  }

  document.querySelector("#pause").onclick = function () {
    click.play();
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    minutes = minutes + 1;
  }

}

function breakTimer(x) {
  if(x == true) {
  minutes = 4
  seconds = 59

  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  let  minutes_interval = setInterval(minutesTimer, 60000);
  let seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;
    document.querySelector(".minutes").innerHTML = minutes;

    if(minutes < 10 ) {
      minutes = "0" + (minutes - 1)
    }
  
  }

  function secondsTimer() {
    seconds = seconds - 1;
    document.querySelector(".seconds").innerHTML = seconds;

    if(seconds <= 0 ) {
      if(minutes <= 0 ) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

      }
     
      seconds = 60;
    }

    if(seconds < 10 ) {
      seconds = "0" + (seconds - 1)
    }
  }

  }

}






