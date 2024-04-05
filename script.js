
// Declaring all the constants and variables
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
const winner = document.getElementsByClassName("winner");
const gameWinnerDisplay = document.getElementById("gameWinnerDisplay");
let playerScore = 0;
let computerScore = 0;

// The playGame function takes in the player's choice and compares it to the computer's choice to determine the winner
let playGame = (playerChoice) => {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE!";
  }
  else {
    switch (playerChoice) {
      case "rock":
        result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "paper":
        result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        break;
      case "scissors":
        result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        break;
    }
  }
  // Setting the text content of the playerDisplay, computerDisplay, and resultDisplay
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  // Defaulting the text color of the resultDisplay to black
  resultDisplay.classList.remove("green-text", "red-text");
  
  // Changing the text color of the resultDisplay based on the result
  switch (result) {
    case "YOU WIN!":
      resultDisplay.classList.add("green-text");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "YOU LOSE!":
      resultDisplay.classList.add("red-text");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
  
 // if playerScore or computerScore is equal to 5, return a display of the winner. if its a draw, then
 // return a display of its a draw and reset the game.
 // ___________________________________________________

 // Checking to see if the player wins the game or if the computer wins the game, or if the game is a draw.
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore === 5) {
      gameWinnerDisplay.textContent = "PLAYER WINS THE GAME!";
      gameWinnerDisplay.classList.add("green-text");
    }
    else if (computerScore === 5) {
      gameWinnerDisplay.textContent = "COMPUTER WINS THE GAME!";
      gameWinnerDisplay.classList.add("red-text");
    }
    else {
      gameWinnerDisplay.textContent = "THIS GAME HAS COME TO A DRAW!";
      gameWinnerDisplay.classList.remove("green-text", "red-text");
    }

    // Resetting the game
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }
};