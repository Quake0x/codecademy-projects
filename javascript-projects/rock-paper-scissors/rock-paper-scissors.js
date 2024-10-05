// Rock, Paper, or Scissors

// Function to get the user's choice. Converts the input to lowercase to make it case-insensitive.
const getUserChoice = userInput => {
  // Convert user input to lowercase for consistency
  userInput = userInput.toLowerCase();

  // Check if the user input is valid ('rock', 'paper', 'scissors', or 'bomb')
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    // If the input is invalid, log an error message to the console
    console.log('Error! Invalid input.');
  }
};

// Function to get the computer's random choice.
const getComputerChoice = () => {
  // Generate a random number between 0 and 2
  let randomNumber = Math.floor(Math.random() * 3);

  // Return 'rock', 'paper', or 'scissors' based on the random number generated
  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }
};

// Function to determine the winner of the game.
const determineWinner = (userChoice, computerChoice) => {
  // Check if both the user and the computer made the same choice (a tie)
  if (userChoice === computerChoice) {
    return 'The game was a tie';
  }

  // Logic for when the user chooses 'rock'
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }

  // Logic for when the user chooses 'paper'
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }

  // Logic for when the user chooses 'scissors'
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'Computer won!';
    } else {
      return 'You won!';
    }
  }

  // Special case where the user enters the 'bomb' cheat code
  if (userChoice === 'bomb') {
    return 'You won!';
  }
};

// Function to play the game.
const playGame = () => {
  // Get the user's choice
  const userChoice = getUserChoice('rock');
  
  // Get the computer's random choice
  const computerChoice = getComputerChoice();

  // Log the user's and computer's choices to the console
  console.log(`Your choice is ${userChoice} and computer's choice is ${computerChoice}.`);

  // Log the result of the game (whether the user or the computer won)
  console.log(determineWinner(userChoice, computerChoice));
};

// Play the game by calling the playGame function
playGame();
