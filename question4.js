function Second_Greatest(arr) {
  if (arr.length == 1) {
    return arr;
  }

  arr.sort((a, b) => a - b);
  console.log(arr);

  if (arr.length == 2) {
    return arr;
  }
  return [arr[arr.length - 2]];
}

console.log(Second_Greatest([9, 2, 7, 4, 5]));
