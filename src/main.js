// Principal variables

let minutes = 25

// Audio files
const click = new Audio("../audio/click.mp3");
const alarm = new Audio("../audio/bell.mp3");
const break_sound = new Audio("../audio/japanese.mp3")

function template() {
  document.querySelector(".minutes").innerHTML = minutes;
  // document.querySelector(".seconds").innerHTML = seconds;
}

seconds = 60;

function playTimer() {
  click.play();
 
  seconds = seconds - 1;
  minutes = minutes - 1;

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

  document.querySelector("#pause").onclick = function () {
    clearInterval(minutes_interval);
    clearInterval(seconds_interval);
    minutes = minutes + 1;
  }

}

function breakTimer(x) {
  if(x == true) {
  break_sound.play();
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

      }
     
      seconds = 60;
    }
  }

  }



}


