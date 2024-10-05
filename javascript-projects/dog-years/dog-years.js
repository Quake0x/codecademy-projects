// Dog Years

// Declare and initialize a value to the variable to store your age
const myAge = 20;

// The first two years of a dog's life count as 10.5 dog years each
const earlyYears = 2 * 10.5;

// Each year after the first two years counts as 4 dog years
const laterYears = (myAge - 2) * 4;

// Add earlyYears and laterYears to get the total your age in dog years
const myAgeInDogYears = earlyYears + laterYears;

// Declare a variable to store your name as a lowercase string
const myName = 'RAFLI'.toLowerCase();

// Log your name, human age, and dog age to the console using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);
