let userWins = 0;
let compWins = 0;
let roundsPlayed = 0;
let winner = "";
let userScore = "Your score: " + userWins;
let compScore = "Computer score: " + compWins;

function computerPlay() {
  let item;
  let randomNum = Math.floor(Math.random() * 3 + 1);
  switch (randomNum) {
    case 1:
      item = "rock";
      break;
    case 2:
      item = "paper";
      break;
    case 3:
      item = "scissors";
    default:
      break;
  }
  return item;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    winnerMessage.textContent = "Tie game!";
    console.log(playerSelection + computerSelection);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userWins++;
    winnerMessage.textContent = "You win! " + playerSelection + " beats " + computerSelection;

    playerScore.textContent = "Your score: " + userWins;
    computerScore.textContent = "Computer score: " + compWins;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compWins++;
    winnerMessage.textContent = "You lose! " + computerSelection + " beats " + playerSelection;

    playerScore.textContent = "Your score: " + userWins;
    computerScore.textContent = "Computer score: " + compWins;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userWins++;
    winnerMessage.textContent = "You win! " + playerSelection + " beats " + computerSelection;

    playerScore.textContent = "Your score: " + userWins;
    computerScore.textContent = "Computer score: " + compWins;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compWins++;
    winnerMessage.textContent = "You lose! " + computerSelection + " beats " + playerSelection;

    playerScore.textContent = "Your score: " + userWins;
    computerScore.textContent = "Computer score: " + compWins;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    compWins++;
    winnerMessage.textContent = "You win! " + playerSelection + " beats " + computerSelection;

    playerScore.textContent = "Your score: " + userWins;
    computerScore.textContent = "Computer score: " + compWins;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compWins++;
    winnerMessage.textContent = "You lose! " + computerSelection + " beats " + playerSelection;

    playerScore.textContent = "Your score: " + userWins;
    computerScore.textContent = "Computer score: " + compWins;
    winnerMessage.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
  }
}

function game() {
  // while (roundsPlayed < 5) {
  //   roundsPlayed++;

  // playerSelection = prompt("Rock, paper or scissors?");
  // playerSelection = playerSelection.toLowerCase();
  // console.log(playRound(playerSelection, computerSelection));

  // }

  // if (userWins > compWins) {
  //   winner = "You";
  // } else if (userWins === compWins) {
  //   winner = "Tie game";
  // } else {
  //   winner = "Computer";
  // }
  // console.log("The winner is: " + winner);

  if (userWins === 5) {
    whoWon.textContent = "YOU WIN!";
    document.querySelector(".rock").style.display = "none";
    document.querySelector(".paper").style.display = "none";
    document.querySelector(".scissors").style.display = "none";
    newBtn.style.display = "initial";
  } else if (compWins === 5) {
    whoWon.textContent = "COMPUTER WINS!";
    document.querySelector(".rock").style.display = "none";
    document.querySelector(".paper").style.display = "none";
    document.querySelector(".scissors").style.display = "none";
    newBtn.style.display = "initial";
  }

  newBtn.addEventListener("click", () => {
    userWins = 0;
    compWins = 0;
    playerPicked.style.display = "none";
    computerPicked.style.display = "none";
    playerScore.style.display = "none";
    computerScore.style.display = "none";
    winnerMessage.style.display = "none";
    whoWon.style.display = "none";
    newBtn.style.display = "none";
    whoWon.textContent = "";

    document.querySelector(".rock").style.display = "initial";
    document.querySelector(".paper").style.display = "initial";
    document.querySelector(".scissors").style.display = "initial";
  });

  if (userWins >= 0 || compWins >= 0) {
    playerPicked.style.display = "block";
    computerPicked.style.display = "block";
    playerScore.style.display = "block";
    computerScore.style.display = "block";
    winnerMessage.style.display = "block";
    whoWon.style.display = "block";
  }
}

const playerPicked = document.querySelector(".player-picked");
const computerPicked = document.querySelector(".computer-picked");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const winnerMessage = document.querySelector(".winner-message");
const whoWon = document.querySelector(".final");
const newBtn = document.querySelector(".new-game");

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
  computerSelection = computerPlay();
  playerSelection = "rock";
  playerPicked.textContent = "You selected " + playerSelection;
  computerPicked.textContent = "Computer selected " + computerSelection;
  // console.log("You selected " + playerSelection);
  console.log(playRound(playerSelection, computerSelection));
  game();
});
const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
  computerSelection = computerPlay();
  playerSelection = "paper";
  playerPicked.textContent = "You selected " + playerSelection;
  computerPicked.textContent = "Computer selected " + computerSelection;

  // console.log("You selected " + playerSelection);
  console.log(playRound(playerSelection, computerSelection));
  game();
});
const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
  computerSelection = computerPlay();
  playerSelection = "scissors";
  playerPicked.textContent = "You selected " + playerSelection;
  computerPicked.textContent = "Computer selected " + computerSelection;

  // console.log("You selected " + playerSelection);
  console.log(playRound(playerSelection, computerSelection));
  game();
});
