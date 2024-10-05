# Dog Years Project

Welcome to the Dog Years project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, where I developed a program to convert human age into dog years.

## Project Overview

In this project, I applied my JavaScript knowledge to create a program that calculates how old a person would be in dog years based on their human age. The program illustrates the different aging rates of dogs compared to humans, providing insights into the concept of "dog years."

### Key Features

1. **Age Calculation**: The program begins with a constant variable `myAge`, initialized to 20, representing human age.

2. **Dog Years Conversion**:
   - **Early Years Calculation**: The first two years of a dog's life are calculated as 10.5 dog years each, resulting in the `earlyYears` variable.
   - **Later Years Calculation**: For each year beyond the first two years, the program calculates the age in dog years using the formula:
     ```
     Dog Years = (Human Age - 2) * 4
     ```
   - The total dog years are derived by adding `earlyYears` and `laterYears`.

3. **String Manipulation**: The program converts the user's name to lowercase using the `.toLowerCase()` method for consistent formatting.

4. **Console Logging**: The results are displayed in the console using string interpolation, providing a clear output that communicates both human and dog ages.

### How to Run the Project

To run the Dog Years project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open your preferred JavaScript environment, such as a web browser console or a code editor with a built-in terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Modify the `myAge` and `myName` Variables**: 
   - Change the `myAge` variable to represent your own age.
   - Update the `myName` variable with your own name.
5. **Execute the Code**: Press Enter to run the code in the console or run the script if you're using a code editor.

### Learning Objectives

- **Understanding Variable Types**: This project helped me differentiate between constant and mutable variables in JavaScript.
- **Performing Calculations**: I gained practical experience in performing arithmetic operations to convert age.
- **Using String Methods**: Implementing string methods like `.toLowerCase()` enhanced my understanding of string manipulation in JavaScript.
