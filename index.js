 // index.js

// Create a variable called multiply set to an equation that will multiply the variables num1 and num2; the result of the multiplication should be 62.
const num1 = 31;
const num2 = 2;
const multiply = num1 * num2;

// Create a variable called random that will generate a random integer greater than 0.
const random = Math.floor(Math.random() * 100) + 1; // Generates a random integer between 1 and 100

// Create a variable called mod set to an equation that will calculate the remainder of dividing variable num3 by num4; the remainder should be 4.
const num3 = 14;
const num4 = 5;
const mod = num3 % num4;

// Create a variable called max that finds the highest number in a set; the value returned should be 20.
const max = Math.max(5, 10, 20, 15); // Finds the highest number in the set

module.exports = { multiply, random, mod, max };
