// Whale Talk

// Define a variable that stores the phrase to be translated into "whale talk"
const input = 'turpentine and turtles';

// Define an array that contains the vowels used in whale language
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Initialize an empty array to store the resulting whale talk translation
let resultArray = [];

// Loop through each character in the input string
for (let i = 0; i < input.length; i++) {
  // console.log(`i is ${i}`);

  // For evey letter in the input that matches either 'u' or 'e', add them to the resultArray array
  if (input[i] === 'e' || input[i] === 'u') {
    resultArray.push(input[i]);
  }

  // Loop through each element in the vowels array
  for (let j = 0; j < vowels.length; j++) {
    // console.log(`j is ${j}`);

    // Check if the current letter in the input variable matches the current letter in the vowels array
    if (input[i] === vowels[j]) {
      // console.log(input[i]);

      // If it matches then push the letter to the resultArray array
      resultArray.push(input[i]);
      // console.log(resultArray);
    }
  }
}

// Join the resultArray into a single string and capitalize all of its letters
const resultString = resultArray.join('').toUpperCase();

// Log the final whale talk string
console.log(resultString);
