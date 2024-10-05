// Store the information about the team in an object
const team = {
  // Properties
  _players: [
    {firstName: 'Daisy', lastName: 'Johnson', age: 24},
    {firstName: 'Jemma', lastName: 'Simmons', age: 25},
    {firstName: 'Leo', lastName: 'Fitz', age: 26}
  ],
  _games: [
    {opponent: 'Hydra', teamPoints: 48, opponentPoints: 94},
    {opponent: 'Inhumans', teamPoints: 70, opponentPoints: 50},
    {opponent: 'Hive', teamPoints: 90, opponentPoints: 60}
  ],

  // Getters
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },

  // Methods
  // Method to add a new player to the _players array
  addPlayer(newFirstName, newLastName, newAge) {
    // Create a new player object using the provided parameters
    const player = {
      firstName: newFirstName,
      lastName:newLastName,
      age: newAge
    };

    // Add the new player object to the _players array
    this._players.push(player);
  },

  // Method to add a new game to the _games array
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    const game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints
    };

    this._games.push(game);
  }
};

// Adding a new player to the team
team.addPlayer('Phil', 'Coulson', 48);

team.addGame('Graviton', 80, 30);

console.log(team._players);
console.log(team._games);
