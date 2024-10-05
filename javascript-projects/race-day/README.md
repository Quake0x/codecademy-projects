# Race Day Project

Welcome to the Race Day project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, where I created a program that registers runners for a race and provides race day instructions based on their age and registration time.

## Project Overview

In this project, I utilized JavaScript to develop a program that assigns race numbers and start times for adult and youth runners based on their age and whether they registered early. The program handles various conditions, including specific cases for runners exactly 18 years old.

### Key Features

1. **Random Race Number Generation**: 
   - Each runner is assigned a unique race number generated randomly between 0 and 999.

2. **Registration Status**: 
   - The program includes a boolean variable to indicate whether a runner registered early, affecting their assigned race number.

3. **Age-Based Logic**:
   - Adults over 18 who register early receive a race number of 1000 or higher and race at 9:30 am.
   - Late adult registrants race at 11:00 am, while youth registrants run at 12:30 pm, regardless of registration time.

4. **Control Flow for Race Times**:
   - The program effectively uses if-else statements to determine the appropriate race time based on age and registration status.

### How to Run the Project

To run the Race Day project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open your preferred JavaScript environment, such as a web browser console or a code editor with a built-in terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Modify the `registeredEarly` and `runnerAge` Variables**: 
   - Change the `registeredEarly` variable to `true` or `false` to test early and late registration scenarios.
   - Set the `runnerAge` variable to different ages to see how the race time changes.
5. **Execute the Code**: Press Enter to run the code in the console or run the script if you're using a code editor.

### Learning Objectives

- **Implementing Random Number Generation**: This project helped me understand how to generate random numbers and apply them in a practical context.
- **Utilizing Control Flow**: I gained hands-on experience in using if-else statements to handle multiple conditions effectively.
- **Age Classification Logic**: The program reinforced my understanding of using variables and logical conditions to classify and respond to user input.
