let userWins = 0;
let compWins = 0;
let roundsPlayed = 0;
let winner = "";

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
    return "It's a tie!";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userWins++;
    return "You win! Rock beats scissors";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    compWins++;
    return "You lose! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userWins++;
    return "You win! Paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    compWins++;
    return "You lose! Scissors beat paper";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userWins++;
    return "You win! Scissors beat paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    compWins++;
    return "You lose! Rock beats scissors";
  }
}

function game() {
  while (roundsPlayed < 5) {
    roundsPlayed++;
    computerSelection = computerPlay();

    playerSelection = prompt("Rock, paper or scissors?");
    playerSelection = playerSelection.toLowerCase();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score: " + userWins);
    console.log("Computer score: " + compWins);
  }

  if (userWins > compWins) {
    winner = "You";
  } else if (userWins === compWins) {
    winner = "Tie game";
  } else {
    winner = "Computer";
  }
  console.log("The winner is: " + winner);
}

game();
