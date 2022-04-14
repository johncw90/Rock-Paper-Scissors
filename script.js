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
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerPlay();
  if (playerSelection == "rock" && computerSelection == "rock") {
    return "It's a tie!";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "You lose! Paper beats rock";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock";
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return "It's a tie!";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "You lose! Scissors beat paper";
  } else if (playerSelection == "scissors" && computerSelection == "scissors") {
    return "It's a tie!";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beat paper";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "You lose! Rock beats scissors";
  }
}
