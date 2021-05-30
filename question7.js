var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a-b;

  // or it can also be written as => numbers.sort((a, b) => a - b);

});
console.log(numbers);

// for a-b it will sort in ascending order : [1, 2, 3, 4, 5]
// for b-a it will sort in descending order : [ 5, 4, 3, 2, 1 ]