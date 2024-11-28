/* 
Problem 13: Sum of Digits
Write a function that takes a non-negative integer as input and returns the sum of its digits.

Example:
----------
    sumOfDigits(123); // Output: 6 (1 + 2 + 3)
    sumOfDigits(0);   // Output: 0
    sumOfDigits(999); // Output: 27 (9 + 9 + 9)
 */

const sumOfDigits = (num) => {
  if (!num || typeof num !== "number" || num < 0) {
    return null;
  }

  const numToString = num.toString();
  let sum = 0;
  for (const n of numToString) {
    sum += +n;
  }
  return sum;
};

const result13 = sumOfDigits("123");
console.log(result13);

/**
Problem: Longest Word in a String
Write a function that takes a string as input and returns the longest word in the string. If there are multiple words with the same maximum length, return the first one.

Example:
---------
    longestWord("The quick brown fox jumps over the lazy dog");
    // Output: "jumps"

    longestWord("A journey of a thousand miles begins with a single step");
    // Output: "thousand"

    longestWord(""); 
    // Output: null
    
Requirements:
-----------------
    1. Ignore punctuation.
    2.Return null if the input string is empty or not a valid string.
 */

const longestWord = (str) => {
  // Edge case
  if (!str || typeof str !== "string" || str.trim() == "") return null;

  // Remove Punctuation
  str = str.trim().replace(/[^\w\s]/g, "");
  let strToArr = str.split(" ");
  let initialWordLenght = strToArr[0];
  for (let i = 0; i < strToArr.length; i++) {
    if (initialWordLenght.length < strToArr[i].length) {
      initialWordLenght = strToArr[i];
    }
  }

  return initialWordLenght;
};

const result14 = longestWord(
  "A journey of a thousand miles begins with a single step"
);
console.log(result14);

/**
Problem 15: Find the Missing Number
You are given an array of n distinct integers in the range 0 to n. The array contains all the numbers in this range except for one missing number. Write a function to find the missing number.

Function Signature
-------------
function findMissingNumber(arr) {
    // Your code here
}

Input
    An array arr of integers in the range 0 to n with one number missing.

Output
    An integer representing the missing number.

Example
    findMissingNumber([3, 0, 1]) // Output: 2
    findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]) // Output: 8
    findMissingNumber([0]) // Output: 1
 */

// const findMissingNumber = (arr) => {    
//   // Edge Case
//   if (arr.length === 0 || !Array.isArray(arr)) return 0;

//   // Base Case
//   if (arr.length === 1) {
//     return arr[0] === 1 ? 0 : 1;
//   }

//   let missingNumber;

//   for (let i = 0; i < arr.length; i++) {
//     if (!arr.includes(i)) {
//       missingNumber = i;
//     }
//   }

//   return missingNumber ? missingNumber : null;
// };


// const result15 = findMissingNumber([10, 7, 8, 9, 6, 4, 0, 1, 2, 3]);
// console.log(result15);


// Better Solution
const findMissingNumber = arr => {
    // Edge case: Empty Array
    if (!Array.isArray(arr) || arr.length === 0) return 0;

    // Base Case: Array With single element:
    const n = arr.length;
    const expectedSum = (n * (n + 1)) / 2
    const actualSum = arr.reduce((sum, num) => sum + num, 0);

    // Return Missing Number
    return expectedSum - actualSum;
}

const result15 = findMissingNumber([3, 1, 0]);
console.log(result15); 