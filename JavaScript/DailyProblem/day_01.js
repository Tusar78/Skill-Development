/**

*Problem 1: Array Manipulation

Write a function named getEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers from the original array.

Conditions
1. The function should be named getEvenNumbers.
2. It should accept a single parameter (the array).
3. It should return a new array with even numbers only.

Examples
getEvenNumbers([1, 2, 3, 4, 5, 6]); // Output: [2, 4, 6]
getEvenNumbers([13, 18, 27, 42]);   // Output: [18, 42]

 */

// function getEvenNumbers(arr){
//     const newArray = arr.filter(num => num % 2 == 0);
//     return newArray;
// }

// const result = getEvenNumbers([13, 18, 27, 42]);
// console.log(result);

function getEvenNumbers(arr) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}


const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result);