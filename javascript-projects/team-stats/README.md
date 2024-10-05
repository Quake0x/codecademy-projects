# Team Stats Project

Welcome to the Team Stats project! This project is part of the Codecademy course **[Learn JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)**, where I developed a program to manage and analyze data about my favorite sports team.

## Project Overview

In this project, I applied my JavaScript knowledge to create a data structure that holds information about players and games for a sports team. The project utilizes factory functions to generate player and game objects, making it easier to manage and retrieve team statistics.

### Key Features

1. **Data Structure**: The program initializes a `team` object that holds two properties: `_players` and `_games`, both of which are arrays storing player and game information.

2. **Adding Players**: 
   - The `addPlayer` method creates a new player object using the provided parameters: `firstName`, `lastName`, and `age`. 
   - This new player object is then added to the `_players` array, allowing for easy expansion of the team roster.

3. **Adding Games**:
   - The `addGame` method allows users to create a new game object with properties such as `opponent`, `teamPoints`, and `opponentPoints`. 
   - This game object is added to the `_games` array, enabling the tracking of game results.

4. **Data Retrieval**: Getter methods are implemented to access the players and games without allowing direct manipulation of the underlying arrays.

### How to Run the Project

To run the Team Stats project:

1. **Copy the Code**: Copy the JavaScript code provided in this project.
2. **Use a JavaScript Environment**: Open your preferred JavaScript environment, such as a web browser console or a code editor with a built-in terminal.
3. **Paste the Code**: Paste the copied code into the console or your JavaScript file.
4. **Modify the Data**: Use the provided methods to add new players and game records.
5. **Execute the Code**: Press Enter to run the code in the console or run the script if you're using a code editor.

### Learning Objectives

- **Understanding Factory Functions**: This project helped me learn how to create reusable object structures using factory functions in JavaScript.
- **Managing Data Structures**: I gained practical experience in organizing and manipulating data using arrays and objects.
- **Implementing Getters and Methods**: I enhanced my understanding of JavaScript object-oriented programming by implementing getters and methods for managing team data.
