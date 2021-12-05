
let userScore = 0;
let cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const restart = document.getElementById("restart");
const result = document.getElementById ("result")
const modal = document.querySelector(".modal");
const rock_div = document.getElementById("piedra");
const paper_div = document.getElementById("papel");
const scissors_div = document.getElementById("tijeras");


function getCpuChoice() {
  const choices = ['piedra', 'papel', 'tijeras'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}


function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1 class="text-win">¡Has ganado!</h1> <p>La máquina escogió <strong>${cpuChoice}</strong></p><img src="img/1F389_color.png" style="width: 100px;">`;
  modal.style.display = 'block';
}

function lose(userChoice, cpuChoice){
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1 class="text-lose">¡Has perdido!</h1> <p>La máquina escogió <strong>${cpuChoice}</strong></p><img src="img/1F63F_color.png" style="width: 100px;">`; 
  modal.style.display = 'block'
}

function draw(userChoice, cpuChoice){
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result.innerHTML = `<h1>¡Empate!</h1> <p>Escogisteis <strong>${cpuChoice}</strong></p><img src="img/229C_color.png" style="width: 100px;">`;
  modal.style.display = 'block'
}


function play(userChoice) {
  const cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case 'piedratijeras':
    case 'papelpiedra':
    case 'tijeraspapel':
      win(userChoice, cpuChoice);
      break;
    case 'piedrapapel':
    case 'papeltijeras':
    case 'tijeraspiedra':
      lose(userChoice, cpuChoice);
      break;
    case 'piedrapiedra':
    case 'papelpapel':
    case 'tijerastijeras':
      draw(userChoice, cpuChoice);
      break;
  }
}



function main() {
  rock_div.addEventListener('click', function() {
    play('piedra');
  })
  
  paper_div.addEventListener('click', function() {
    play('papel');
  })
  
  scissors_div.addEventListener('click', function() {
    play('tijeras');
  })
}



function clearModal(e){
  if(e.target == modal) {
    modal.style.display = "none"
  }
}


function restartGame(){
  userScore = 0;
  cpuScore = 0;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
}


restart.addEventListener('click', restartGame);
window.addEventListener('click', clearModal);
main ();