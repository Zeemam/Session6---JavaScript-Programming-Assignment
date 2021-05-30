console.log("This is Question-2, This program will give the nth power of a number.")

const prompt = require('prompt-sync')();
 
const x = prompt('Please input a Number? ');
const y = prompt('Please input Power of this Number? ');

const z = Math.pow(x,y);

console.log("The Value of " + x + " to the " + y + "th Power is= " + z);