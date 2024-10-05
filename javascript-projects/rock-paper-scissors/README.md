# Rock, Paper, or Scissors

Welcome to the Rock, Paper, or Scissors project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, where I developed a program that simulates the classic game of Rock, Paper, Scissors using JavaScript.

## Project Overview

In this project, I created a fun interactive program that allows the user to play Rock, Paper, or Scissors against the computer. The game will generate a choice for the computer and compare it with the user's choice to determine the winner. There is also a special "cheat code" hidden in the game for guaranteed wins!

### Key Features

1. **User Input**: 
   - The user can input their choice of either 'rock', 'paper', or 'scissors'. Input is case-insensitive.
   - A special secret choice, 'bomb', allows the user to automatically win the game.

2. **Computer Choice**: 
   - The program uses `Math.random()` and `Math.floor()` to randomly generate the computer's choice between 'rock', 'paper', and 'scissors'.

3. **Determine the Winner**: 
   - The game compares the user's choice with the computer's choice to determine the winner, following the standard rules:
     - Rock beats scissors
     - Scissors beat paper
     - Paper beats rock
   - If both choices are the same, the game results in a tie.
   - If the user chooses 'bomb', they win automatically, regardless of the computer's choice.

4. **Game Flow**: 
   - The game displays both the user's and the computer's choices.
   - The game announces the result: user wins, computer wins, or a tie.

### How to Run the Project

To run the Rock, Paper, or Scissors project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open your preferred JavaScript environment, such as a web browser console or a code editor with a terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Modify the `getUserChoice` Function**: 
   - Input your desired choice of either 'rock', 'paper', 'scissors', or 'bomb' by passing it as an argument to the `getUserChoice` function.
5. **Execute the Code**: Press Enter to run the code in the console or run the script in your code editor.
6. **View the Results**: The console will display both the user's and the computer's choices, followed by the result of the game.

### Learning Objectives

- **Utilizing Functions**: This project reinforced my understanding of using arrow functions, function expressions, and function declarations in JavaScript.
- **Randomization**: I gained practical experience using `Math.random()` and `Math.floor()` to generate random choices.
- **Control Flow**: I practiced using `if/else` and `else if` statements to control the logic and outcomes of the game.
- **Edge Case Handling**: I implemented a secret cheat code ('bomb') to showcase how to handle special cases in a program.
