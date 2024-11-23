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

// function getEvenNumbers(arr) {
//     const newArray = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             newArray.push(arr[i]);
//         }
//     }

//     return newArray;
// }


// const result = getEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result);


/*

Problem 2: Find the Maximum Number

Write a function named findMax that takes an array of numbers as input and returns the largest number in the array.

Conditions
---------
1. The function should be named findMax.
2. It should accept a single parameter (the array).
3. It should return the maximum number in the array.

Examples
findMax([1, 2, 3, 4, 5]); // Output: 5
findMax([23, 56, 12, 78, 34]); // Output: 78
findMax([-5, -2, -8, -1]); // Output: -1

Hints (Optional)
You can use a loop or modern JavaScript methods like Math.max with the spread operator.
*/

// Solution 01
function findMax(arr) {
    let maxNum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (maxNum < arr[i]) {
            maxNum = arr[i];
        }
    }
    
    return maxNum;
}
const result1 = findMax([-5, -2, -8, -1]);
console.log(result1);


// Solution 02
function findMax(arr) {
    if (arr.length === 0) return null;
    let maxNum = Math.max(...arr);
    return maxNum;
}

const result2 = findMax([1, 2, 3, 4, 5]);
console.log(result2);

/*
Problem 3: Reverse a String
Write a function named reverseString that takes a string as input and returns the string in reverse order.

Conditions
1. The function should be named reverseString.
2. It should accept a single parameter (the string).
3. It should return the string reversed.

Examples
reverseString("hello"); // Output: "olleh"
reverseString("JavaScript"); // Output: "tpircSavaJ"
reverseString("12345"); // Output: "54321"
*/


// Solution 01
function reverseString(str) {    
    if (!str) return null;
    let reverseStr = '';
    for (let i = str.length; i > 0; i--) {
        reverseStr += str[i-1];
    }

    return reverseStr;
    
}

const result5 = reverseString("");
console.log(result5);


// Solution 02
function reverseString(str) {
    if (!str) return null;
    let reverseStr = str.split("").reverse().join("");
    return reverseStr;
}

// const result2 = reverseString("JavaScript");
// console.log(result2);


// Solution 03
function reverseString(str) {
    if (typeof str !== 'string' || !str) return null;
    let reverseStr = [...str].reverse().join("");
    return reverseStr;
}

const result3 = reverseString("Hello");
console.log(result3);
