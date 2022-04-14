function computerPlay() {
  let item;
  let randomNum = Math.floor(Math.random() * 3 + 1);
  switch (randomNum) {
    case 1:
      item = "Rock";
      break;
    case 2:
      item = "Paper";
      break;
    case 3:
      item = "Scissors";
    default:
      break;
  }
  return item;
}
