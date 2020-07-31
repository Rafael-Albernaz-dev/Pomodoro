// Principal variables
let seconds = "00"
let minutes = 25

// Audio files
const click = new Audio("../audio/click.mp3");
const alarm = new Audio("../audio/bell.mp3");

function template() {
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;
}

function playTimer() {
  click.play();

  seconds = 59
  minutes = 24

  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  let  minutes_interval = setInterval(minutesTimer, 60000);
  let seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;
    document.querySelector(".minutes").innerHTML = minutes;
  
  }

  function secondsTimer() {
    seconds = seconds - 1;
    document.querySelector(".seconds").innerHTML = seconds;
    if(seconds <= 0 ) {
      if(minutes <= 0 ) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);
        breakTimer(true);

        document.querySelector(".done").innerHTML = "Sessão encerrada! Intervalo obrigatório!"
        
        document.querySelector(".done").classList.add("show_message");
        
        bell.play();
      }
      seconds = 60;
    }
    
  }

  document.querySelector(".")

}

function breakTimer(x) {
  if(x == true) {
  click.play();
  minutes = 4
  seconds = 59

  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  let  minutes_interval = setInterval(minutesTimer, 60000);
  let seconds_interval = setInterval(secondsTimer, 1000);

  function minutesTimer() {
    minutes = minutes - 1;
    document.querySelector(".minutes").innerHTML = minutes;
  
  }

  function secondsTimer() {
    seconds = seconds - 1;
    document.querySelector(".seconds").innerHTML = seconds;

    if(seconds <= 0 ) {
      if(minutes <= 0 ) {
        clearInterval(minutes_interval);
        clearInterval(seconds_interval);

        document.querySelector(".done").innerHTML = "Clique em play para continuar."
      }
      
    }
  }

  }



}


