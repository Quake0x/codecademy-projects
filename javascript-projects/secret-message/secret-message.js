// Secret Message

// Original array
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

// Log the initial length of the array
// console.log(secretMessage.length); // Output: 24

// Remove the last element of the array 
secretMessage.pop();

// Log the new length of the array after removing the last element
// console.log(secretMessage.length); // Output: 23

// Add the words 'to' and 'Program' to the end of the array
secretMessage.push('to', 'Program');

// Find the index of the element 'easily'
// console.log(secretMessage.indexOf('easily')); // Output: 7

// Replace the word 'easily' with 'right' by accessing the index directly
secretMessage[7] = 'right';

// Remove the first element of the array
secretMessage.shift();

// Add 'Programming' to the beginning of the array
secretMessage.unshift('Programming');

// Find the index of the element 'get'
// console.log(secretMessage.indexOf('get')); // Output: 6

// Remove the words 'get', 'right', 'the', 'first', 'time,' 
// and replace them with the single word 'know'
secretMessage.splice(6, 5, 'know,'); // Remove 5 elements start from index 6 and replace them with the word 'know' 

// Create a string from the array elements, separated by spaces, and log the final message
console.log(secretMessage.join(' '));
