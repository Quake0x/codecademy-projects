# Training Days

Welcome to the Training Days project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, where I improved the scope management of variables in a program that sends athletes messages about their upcoming events and remaining training days.

## Project Overview

In this project, I worked on a program that randomly selects an event (Marathon, Triathlon, or Pentathlon) for an athlete and calculates the number of days they have left to train. The main goal was to fix issues related to variable scope, making the program more maintainable and less prone to errors as the service grows.

### Key Features

1. **Random Event Selection**:
   - The `getRandEvent()` function selects a random event for an athlete. This was fixed by moving the `random` variable into the local scope of the function, ensuring the event is randomized for each athlete.

2. **Training Days Calculation**:
   - The `getTrainingDays()` function calculates the number of days an athlete has to train based on their event. The `days` variable was refactored to be declared outside of the conditional blocks so that each event modifies its value, preventing scope-related errors.

3. **Logging Athlete Information**:
   - The `logEvent()` and `logTime()` functions now accept the athlete's `name` as an argument, allowing these functions to be reused for different athletes without duplicating code.

4. **Multiple Athletes**:
   - The program supports multiple athletes. Two athletes (Nala and Warren) are assigned different random events and training days by using separate calls to the `getRandEvent()` and `getTrainingDays()` functions.

### How to Run the Project

To run the Training Days project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open your preferred JavaScript environment, such as a web browser console or a code editor with a built-in terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Modify Athlete Names**: 
   - You can change the athlete names (`name` and `name2`) to represent different athletes.
5. **Run the Code**: Press Enter to execute the code in the console or run the script in your code editor.
6. **View the Results**: The console will display the athlete names, their randomly assigned events, and the number of days they have left to train.

### Learning Objectives

- **Understanding Variable Scope**: This project helped me understand how to effectively manage variable scope, both globally and locally, to avoid unintended behavior.
- **Functions with Parameters**: I practiced passing arguments to functions, allowing for more flexible and reusable code.
- **Randomization**: The project reinforced my understanding of how to implement randomization in JavaScript using the `Math.random()` method.
