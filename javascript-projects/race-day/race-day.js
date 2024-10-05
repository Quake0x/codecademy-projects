//  Race Day

// Generate a random race number between 0 and 999 for the runner
let raceNumber = Math.floor(Math.random() * 1000);

// Define a variable that stores whether the runner registered early or not
let registeredEarly = true;

// Define a variable that stores the runner's age
let runnerAge = 20;

/*
Check if the runner is an adult and registered early
If so, add 1000 to their race number
*/
if (runnerAge > 18 && registeredEarly === true) {
  raceNumber += 1000; // Early adults receive a race number at or above 1000
}

// Check the runner's age and registration time to determine their race time and race number
if (runnerAge > 18 && registeredEarly === true) {
  console.log(`You will race at 9:30 am and your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && registeredEarly === false) {
  console.log(`You will race at 11:00 am and your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
  console.log(`You will race at 12:30 pm and your race number is ${raceNumber}.`);
} else {
  console.log('Please see the registration desk.');
}
