// Sleep Debt Calculator

// Define an arrow function to get the total actual sleep hours of the week using implicit return
const getActualSleepHours = () => 8 + 5 + 7 + 4 + 9 + 6 + 7;

// Define an arrow function to get the ideal sleep hours per week
const getIdealSleepHours = (idealHours = 8) /* Default ideal hours per night is 8 */ =>
  idealHours * 7; // Total ideal hours per week

// Define an arrow function to calculate the sleep debt
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(9); // Pass in 9 as an argumen in the function

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours >= idealSleepHours) {
    console.log(`You got ${(actualSleepHours - idealSleepHours)} hour(s) more sleep that you needed this week.`);
  } else if (actualSleepHours <= idealSleepHours) {
    console.log(`You got ${(idealSleepHours - actualSleepHours)} hour(s) less sleep than you needed this week. Get some rest.`);
  }
};

// Start the program
calculateSleepDebt();
