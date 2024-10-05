# Sleep Debt Calculator

Welcome to the Sleep Debt Calculator project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, where I developed a program to calculate whether you're getting enough sleep each week and determine if you have accumulated sleep debt.

## Project Overview

In this project, I applied my JavaScript skills to create a sleep debt calculator. The program tracks how many hours of sleep you got each night over a week and compares it to your ideal sleep goal. It then calculates whether you've met, exceeded, or fallen short of your weekly sleep target and by how many hours.

### Key Features

1. **Sleep Tracking**:
   - The program records the number of hours you slept each night using a `getSleepHours()` function that accepts the day of the week as an argument.

2. **Actual Sleep Calculation**:
   - A function named `getActualSleepHours()` calculates the total number of hours you slept over the past week by summing up your nightly sleep.

3. **Ideal Sleep Calculation**:
   - The `getIdealSleepHours()` function calculates the total number of hours you should be sleeping per week based on an ideal number of hours per night. By default, this is set to 8 hours but can be customized.

4. **Sleep Debt Calculation**:
   - The program calculates your sleep debt using the `calculateSleepDebt()` function, which compares your actual sleep to your ideal sleep. Based on this comparison, it logs one of the following outcomes:
     - **Perfect Sleep**: If you got the exact amount of sleep.
     - **Excess Sleep**: If you slept more than needed.
     - **Sleep Deficit**: If you slept less than your ideal amount.

5. **Additional Features**:
   - The program can also output the exact number of hours you're over or under your sleep goal.

### How to Run the Project

To run the Sleep Debt Calculator project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open your preferred JavaScript environment, such as a web browser console or a code editor with a built-in terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Modify the Sleep Hours**: 
   - Adjust the sleep hours in the `getSleepHours()` function for each day of the week, or modify the `getActualSleepHours()` function to directly return the sum of your sleep hours.
5. **Customize the Ideal Hours**: 
   - If you have a specific sleep goal, update the ideal sleep hours by passing the desired value as an argument to the `getIdealSleepHours()` function (default is set to 8 hours).
6. **Run the Code**: Press Enter to execute the code in the console or run the script in your code editor.
7. **View the Results**: The console will display the actual sleep hours, the ideal sleep hours, and whether you've accumulated sleep debt.

### Learning Objectives

- **Functions**: This project reinforced my understanding of creating and using functions with parameters in JavaScript.
- **Conditional Logic**: I practiced using `if/else` statements to control program flow and provide different outcomes based on input values.
- **Mathematical Operations**: The project helped me become more comfortable with basic arithmetic operations in JavaScript.
- **Code Reusability**: I learned to create modular functions that can be reused for various inputs and scenarios, making my code more efficient and flexible.
