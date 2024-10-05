// Training Days

// Function to get a random event
const getRandEvent = () => {
  // Generate a random number on every function call
  const random = Math.floor(Math.random() * 3);

  if (random === 0) {
    return 'Marathon';
  } else if (random === 1) {
    return 'Triathlon';
  } else if (random === 2) {
    return 'Pentathlon';
  }
};

// Function to get the number of training days required based on the event
const getTrainingDays = event => {
  let days; // Declare 'days' in the outer scope

  // Each block will reassign the value of 'days' based on the event
  if (event === 'Marathon') {
    days = 50;
  } else if (event === 'Triathlon') {
    days = 100;
  } else if (event === 'Pentathlon') {
    days = 200;
  }

  return days;
};

// Function to log the event name for a given athlete
const logEvent = (name, event) => {
  console.log(`${name}'s event is: ${event}`);
};

// Function to log the training time required for a given athlete
const logTime = (name, days) => {
  console.log(`${name}'s time to train is: ${days} days`);
};

// Rafli's event and training days
const event = getRandEvent();
const days = getTrainingDays(event);
const name = 'Rafli';
logEvent(name, event);
logTime(name, days);

// Warren's event and training days
const event2 = getRandEvent();
const days2 = getTrainingDays(event2);
const name2 = 'Warren';
logEvent(name2, event2);
logTime(name2, days2);
