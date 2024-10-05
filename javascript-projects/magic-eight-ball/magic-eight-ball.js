// Magic Eight Ball

// Define a variable for the user's name
let userName = 'Rafli';

/*
Use a ternary expression to greet the user
If a name is provided, then greet them by name; otherwise, use a generic greeting
*/
userName ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

// Store the user's question in a variable
let userQuestion = 'Will I get rich?';

// Log the user's question to the console
userName ? console.log(`${userName} asked "${userQuestion}".`) : console.log(`The user asked "${userQuestion}".`);

// Generate a random number between 0 (inclusive) and 8 (exclusive)
let randomNumber = Math.floor(Math.random() * 8);

// Initialize a variable to store the Magic Eight Ball's response
let eightBall = '';

// Assign a response to the eightBall variable based on the generated random number
switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  default:
    eightBall = 'Signs point to yes';
    break;
}

/*
* Or use if/else if/else statements
if (randomNumber === 0) {
  eightBall = 'It is certain';
} else if (randomNumber === 1) {
  eightBall = 'It is decidedly so';
} else if (randomNumber === 2) {
  eightBall = 'Reply hazy try again';
} else if (randomNumber === 3) {
  eightBall = 'Cannot predict now';
} else if (randomNumber === 4) {
  eightBall = 'Do not count on it';
} else if (randomNumber === 5) {
  eightBall = 'My sources say no';
} else if (randomNumber === 6) {
  eightBall = 'Outlook not so good';
} else {
  eightBall = 'Signs point to yes';
}
*/

// Log the Magic Eight Ball's answer to the console
console.log(`The Magic Eight Ball says: ${eightBall}.`);
