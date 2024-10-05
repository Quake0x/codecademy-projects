# Meal Maker Project

Welcome to the Meal Maker project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, where I developed a function to set a meal and price for Today’s Special using JavaScript getters and setters.

## Project Overview

In this project, I developed an object that safely handles the meal and price for Today’s Special, ensuring type checks to prevent errors. The implementation includes setter methods for meal and price, ensuring that only valid data is accepted, and a getter method that returns a formatted string describing Today’s Special.

### Key Features

1. **Menu Object**: 
   - Created a `menu` object that holds the properties `_meal` and `_price`, both of which should not be altered directly.
   - The `_meal` property is initialized as an empty string, and `_price` is set to 0.

2. **Setter Methods**:
   - Implemented a setter for the meal that checks if the value is a string before assignment.
   - Implemented a setter for the price that ensures the value is a number.

3. **Getter Method**:
   - Added a getter method that returns a formatted string indicating Today’s Special, verifying that both meal and price have valid values.

4. **Data Integrity**: 
   - The use of getters and setters provides a layer of validation, preventing incorrect data types from being assigned to the meal and price properties.

### How to Run the Project

To run the Meal Maker project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open your preferred JavaScript environment, such as a web browser console or a code editor with a built-in terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Set the Values**: Use the setter methods to assign a string value to the meal and a numerical value to the price.
5. **Execute the Code**: Press Enter to run the code in the console or run the script if you're using a code editor.

### Learning Objectives

- **Creating Objects**: Implementing the menu object deepened my understanding of object-oriented programming concepts in JavaScript.
- **Understanding Getters and Setters**: This project helped me learn how to use getters and setters in JavaScript to control access to object properties.
- **Type Checking**: I gained experience in validating data types to ensure that only appropriate values are assigned.
