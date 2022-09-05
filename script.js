//Foundation funcs
function computerChoice() {
  let rpsChoices = ["Rock", "Paper", "Scissors"];
  let computerChoice =
    rpsChoices[Math.floor(Math.random() * rpsChoices.length)];
  return computerChoice;
}

function getResult(computerChoice, playerChoice) {
  let score;
  if (computerChoice == playerChoice) {
    score = 0;
  } else if (computerChoice == "Rock" && playerChoice == "Scissors") {
    score = -1;
  } else if (computerChoice == "Scissors" && playerChoice == "Paper") {
    score = -1;
  } else if (computerChoice == "Paper" && playerChoice == "Rock") {
    score = -1;
  } else {
    score = 1;
  }
  return score;
}

function showResult(score, playerChoice, computerChoice) {
  let result = document.getElementById("result");
  switch (score) {
    case -1:
      result.innerText = `You lose!`;
      break;
    case 0:
      result.innerText = `It's a draw!`;
      break;
    case 1:
      result.innerText = `You win!`;
      break;
  }
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👱${playerChoice} vs 🤖 ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  const getComputerChoice = computerChoice();
  const score = getResult(getComputerChoice, playerChoice.value);
  showResult(score, playerChoice.value, getComputerChoice);
}

function endGame() {
  let playerScore = document.getElementById("player-score");
  let hands = document.getElementById("hands");
  let result = document.getElementById("result");
  playerScore.innerText = "";
  hands.innerText = "";
  result.innerText = "";
}

function playGame() {
  let rpsButtons = document.querySelectorAll(".rpsButton");
  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton);
  });
  let endGameButton = document.getElementById("endGameButton");
  endGameButton.onclick = () => endGame();
}
playGame();
