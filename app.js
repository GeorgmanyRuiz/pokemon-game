const userScore = 0;
const computerScore =0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const fire_div = document.getElementById("f");
const water_div = document.getElementById("w");
const grass_div = document.getElementById("g");

function getComputerChoice() {
  const choices = ["f", "w", "g"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice){
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "fg":
    case "wf":
    case "gw":
      console.log("USER WINS!");
      break;
    case "gf":
    case "wg":
    case "fw":
      console.log("USER LOSES..");
      break;
    case "ff":
    case "ww":
    case "gg":
      console.log("Its A Draw..");
      break;
  }
}

function main() {
  fire_div.addEventListener("click", function() {
    game("f");
  })

  water_div.addEventListener("click", function() {
    game("w");
  })

  grass_div.addEventListener("click", function() {
    game("g");
  })
}

main();
