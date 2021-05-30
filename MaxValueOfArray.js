console.log("This is Question-4, This program will give the Largest Number in an array.")

let num = [34, 22, 66, 78, 90, 12, 45, 83, 40];

const maxValueOfArr = arr => {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++){
        if (max < arr[i]){
            max = arr [i];
        }
    }
    return max;
};

const maxValue = maxValueOfArr(num);
console.log(maxValue);
