# Magic Eight Ball Project

Welcome to the Magic Eight Ball project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, where I built a fun program that emulates the classic Magic Eight Ball toy using JavaScript control flow.

## Project Overview

In this project, I used JavaScript to create a Magic Eight Ball program that responds with random fortune answers based on user questions. The user can input their name and ask any question, and the program will return a randomized Magic Eight Ball response.

### Key Features

1. **User Input**: 
   - The program allows users to input their name via the `userName` variable. If the user provides a name, they are greeted by name; otherwise, a generic greeting is used.
   - The user can also input any question they want to ask the Magic Eight Ball by modifying the `userQuestion` variable.

2. **Ternary Operator for User Greeting**: The program uses a ternary expression to check whether the user has provided their name and dynamically adjusts the greeting.

3. **Randomized Responses**: 
   - The program uses `Math.random()` and `Math.floor()` to generate a random number between 0 and 7, which corresponds to one of eight possible Magic Eight Ball responses.
   - Responses include classic phrases like:
     - "It is certain"
     - "Reply hazy try again"
     - "My sources say no"
     - "Signs point to yes"

4. **Control Flow**:
   - Two different control flow approaches (switch statement and if/else) are demonstrated for assigning responses to the Magic Eight Ball.

### How to Run the Project

To run the Magic Eight Ball project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open a JavaScript environment, such as a web browser console or a code editor with a built-in terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Input Your Name and Question**: 
   - Change the `userName` variable to input your name, or leave it blank for a generic greeting.
   - Modify the `userQuestion` variable to ask any question you like.
5. **Execute the Code**: Press Enter to run the code in the console or run the script if you're using a code editor.

### Learning Objectives

- **Mastering Control Flow**: This project helped me solidify the concept of control flow using both `switch` statements and `if/else` statements.
- **Random Number Generation**: I gained practical experience in generating random numbers in JavaScript using the `Math.random()` and `Math.floor()` methods.
- **String Interpolation**: The project reinforced the use of string interpolation for more dynamic and readable output in the console.
