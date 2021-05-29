console.log("This is Question-1, please input a number to check its divisibility by '3'")

const prompt = require('prompt-sync')();
 
const num = prompt('What is your num? ');
// console.log(`Your Number is: ${num}`);

if (num % 3 === 0) {
    console.log("Your Number: " + num + " is divisible by 3")
}
else {
    console.log("Your Number: " + num + " is not divisible by 3")
}
