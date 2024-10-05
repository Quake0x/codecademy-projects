# Kelvin Weather Project

Welcome to the Kelvin Weather project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, focusing on converting temperature forecasts from Kelvin to Celsius, Fahrenheit, and Newton.

## Project Overview

In this project, I utilized my JavaScript knowledge to create a program that converts a fixed Kelvin temperature into Celsius, Fahrenheit, and Newton. The program demonstrates the use of variables, arithmetic operations, and the built-in Math object.

### Key Features

1. **Temperature Conversion**: The project begins with a constant variable named `kelvin`, initialized to 293, representing the temperature in Kelvin.

2. **Mathematical Calculations**:
   - **Kelvin to Celsius**: The temperature in Celsius is calculated by subtracting 273 from the `kelvin` variable.
   - **Celsius to Fahrenheit**: The conversion is done using the formula:
     ```
     Fahrenheit = (Celsius × (9/5)) + 32
     ```
   - **Celsius to Newton**: The conversion to Newton is calculated using the formula:
     ```
     Newton = Celsius × (33/100)
     ```

3. **Rounding Values**: The program uses the `Math.floor()` method to round down the calculated temperatures for both Fahrenheit and Newton.

4. **Console Logging**: The temperatures for both Fahrenheit and Newton are logged to the console using string interpolation, providing a clear output.

### How to Run the Project

To run the Kelvin Weather project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open your preferred JavaScript environment, such as a web browser console or a code editor with a built-in terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Modify the `kelvin` Variable**: Change the `kelvin` variable to any desired temperature in Kelvin.
5. **Execute the Code**: Press Enter to run the code in the console or run the script if you're using a code editor.

### Learning Objectives

- **Understanding Variable Types**: This project helped me grasp the distinction between constant and mutable variables in JavaScript.
- **Performing Mathematical Operations**: I gained practical experience in using arithmetic operations and built-in methods.
- **Using String Interpolation**: Implementing string interpolation for logging results improved the clarity of the output messages.
