

function sumAll(arr) {
  
  let sum = 0;
  let N1 = Math.min(arr);
  let N2 = Math.max(arr);
 
  
  for(var i = N1; i <= N2; i++){     
    sum += i;
  }
  
  
  return sum;
}

sumAll([1, 4]);


let temp = sumAll();
console.log(sum);


// let n = 5

//   const total = (n * (n+1)) / 2;

//   console.log(total);