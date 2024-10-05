// Grammar Checker

// Declare and initialize a variable to hold the paragraph text
let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

// Split the story into an array of words
let storyWords = story.split(' ');

// Define variables for words to be filtered or corrected
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Count the number of words in the story
let count = 0; // Initialize a variable to store the word count
storyWords.forEach((word) => count++); // Increases the value of the count variable with each iteration
// console.log(count); // Log the total word count

// Filter the unnecessary word "literally" from the story
storyWords = storyWords.filter(word => word !== unnecessaryWord);

// Correct the misspelled word "beautifull" to "beautiful"
storyWords = storyWords.map(word => word === misspelledWord ? 'beautiful' : word);

// Find the index of the "bad" word in the story
const badWordIndex = storyWords.findIndex(word => word === badWord);
// console.log(badWordIndex); // Log the index of the bad word

// Replace the bad word with a more appropriate word
storyWords[badWordIndex] = 'really'; // Replace "freaking" with "really"

// Check if every word in the story is 10 characters or less
const lengthCheck = storyWords.every(word => word.length <= 10); // Check if all words are 10 characters or less
// console.log(lengthCheck); // Log the result of the length check

// If there is a word longer than 10 characters, find and log it
let longWord = storyWords.filter(word => word.length > 10); // Filter out long words
// console.log(longWord); // Log the long words

// Filter out the word "very"
storyWords = storyWords.filter(word => word !== 'very');

// Find the index of the word "GW", and replace it with "George Washington"
const GWIndex = storyWords.findIndex(word => word === 'GW'); // Get the index of "GW"
storyWords[GWIndex] = 'George Washington'; // Replace "GW" with "George Washington"

// Convert units from feet to meters and miles to kilometers
storyWords = storyWords.map(word => word === 'feet' ? 'meters' : word); // Convert feet to meters
storyWords = storyWords.map(word => word === 'mile' ? 'kilometers' : word); // Convert mile to kilometers

// Join the words back into a single string and output the final edited story
console.log(storyWords.join(' ')); // Log the final edited story
