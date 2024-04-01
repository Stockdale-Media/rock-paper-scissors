// Steps For Obtaining Solution For The Rock, Paper, Scissors Game.
//------------------------------------------------------------------
// 1. Game will be  played against the computer. Begin with a function
// called getComputerChoice that will randomly return either "Rock", "Paper" or "Scissors"
// 2. Write a function that plays a single round of Rock Paper Scissors. The function
// should take two parameters - the playerSelection and computerSelection - and then
// return a string that declares the winner of the round like so: "You lose! Paper beats Rock".
// 3. Write a new function called playGame(). Use the previous function inside of this one to play a five round
// game that keeps score and reports a winner or loser at the end.
// 4. Use prompt() to get input from the user.


// Initialize and assign variables of playerScore and computerScore
let playerScore = 0;
let computerScore = 0;

// Create function getComputerChoice()
let getComputerChoice = () => {
  let choice = ["rock", "paper", "scissors"];
  return choice[Math.floor(Math.random() * choice.length)];
}

// Create function playRound()
let playRound = (playerSelection, computerSelection) => {
  switch (true) {
    case (playerSelection === "rock"):
    case (computerSelection === "scissors"):
      ++playerScore;
      return "You win! Rock beats scissors";
      break;
    case (playerSelection === "scissors"):
    case (computerSelection === "rock"):
      ++computerScore;
      return "You lose! Rock beats scissors";
      break;
    case (playerSelection === "rock"):
    case (computerSelection === "rock"):
      return "It's a draw!";
      break;
    case (playerSelection === "paper"):
    case (computerSelection === "rock"):
      ++playerScore;
      return "You win! Paper beats rock";
      break;
    case (playerSelection === "rock"):
    case (computerSelection === "paper"):
      ++computerScore;
      return "You lose! Paper beats rock";
      break;
    case (playerSelection === "paper"):
    case (computerSelection === "paper"):
      return "It's a draw!";
      break;
    case (playerSelection === "scissors"):
    case (computerSelection === "paper"):
      ++playerScore;
      return "You win! Scissors beats paper";
      break;
    case (playerSelection === "paper"):
    case (computerSelection === "scissors"):
      ++computerScore;
      return "You lose! Scissors beats paper";
      break;
    case (playerSelection === "scissors"):
    case (computerSelection === "scissors"):
      return "It's a draw!";
      break;
  }
}

// Create function playGame()
let playGame = () => {
  for(let i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter rock, paper, or scissors: ");
    let computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
  }
  if (playerScore > computerScore) {
    console.log("You win the game!");
  }
  else if (playerScore === computerScore) {
    console.log("It's a tie!");
  }
  else {
    console.log("You lose the game!");
  }
}

// Call playGame()
playGame();