console.log("This is Question-9, This program will sum all the odd digits between '0' and your input number.")

const prompt = require('prompt-sync')();
 
const num = prompt('What is your num? ');

let sum = 0;
for (let i = 1; i <= num; i += 2) {
    sum += i;
}
console.log (sum);