// Kelvin Weather

// Declare and initialize a value to the variable to store the weather forecast in Kelvin
const kelvin = 293;

// Convert Kelvin to Celsius
const celsius = kelvin - 273; // Celsiusis 273 degrees less than Kelvin

// Convert Celsius to Fahrenheit, we will round the number saved to fahrenheit that's why we use let keyword
let fahrenheit = celsius * (9/5) + 32;

// Reassign the fahrenheit variable to rounded down value
fahrenheit = Math.floor(fahrenheit);

// Log the temperature in Fahrenheit to the console using string interpolation
// console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Convert Celsius to Newton and round down the value in one statement
let newton = Math.floor(celsius * (33/100));

// Log the temperature in Fahrenheit to the console using string interpolation
console.log(`The temperature is ${newton} degrees Newton.`);
