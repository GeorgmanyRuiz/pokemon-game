let userScore = 0;
let computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const fire_div = document.getElementById("f");
const water_div = document.getElementById("w");
const grass_div = document.getElementById("g");


var myAudio = document.getElementById("audio1");
  myAudio.onloadeddata = function() {
  myAudio.volume = 0.1;
};

function getComputerChoice() {
  const choices = ["f", "w", "g"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWord(letter) {
  if (letter === "f") return "Fire";
  if (letter === "w") return "Water"
  if (letter === "g") return "Grass"
}

function win(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!!`;
  userChoice_div.classList.add('green-glow');
  setTimeout(() => userChoice_div.classList.remove('green-glow'), 1000);
}


function lose(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You Lost :(...`;
  userChoice_div.classList.add('red-glow');
  setTimeout(() => userChoice_div.classList.remove('red-glow'), 600);
}

function draw(userChoice, computerChoice) {
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML = `${convertToWord(userChoice)} does nothing to ${convertToWord(computerChoice)}. It's a Draw?!`;
  userChoice_div.classList.add('gray-glow');
  setTimeout(() => userChoice_div.classList.remove('gray-glow'), 600);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "fg":
    case "wf":
    case "gw":
      win(userChoice, computerChoice);
      break;
    case "gf":
    case "wg":
    case "fw":
      lose(userChoice, computerChoice);
      break;
    case "ff":
    case "ww":
    case "gg":
      draw(userChoice, computerChoice);
      break;
  }
}



function main() {
  fire_div.addEventListener("click", () => game("f"));

  water_div.addEventListener("click", () => game("w"));

  grass_div.addEventListener("click", () => game("g"));
}

main();
