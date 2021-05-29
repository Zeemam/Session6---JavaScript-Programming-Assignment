console.log("This is Question-3, This program will give the Factorial of a number.")

const prompt = require('prompt-sync')();
 
const n = prompt('Please input a Number? ');

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }
    else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }
  }

  answer = factorial(n)
  console.log("The factorial of " + n + " is " + answer);