/*
Problem 1: Sum of Odd Numbers
Write a function sumOddNumbers that calculates the sum of all odd numbers in an array.

Input
An array of integers, arr (e.g., [1, 2, 3, 4, 5]).
Output
The sum of all odd numbers in the array. If there are no odd numbers, return 0.
Constraints
The input array may be empty.
The elements of the array can be positive, negative, or zero.
*/

const sumOddNumbers = (arr) => {
  // Edge Case
  if (!arr || Array.isArray(arr) === false || arr.length === 0) return 0;

  // Base Case
  let sum = 0;
  arr.forEach((num) => {
    if (Math.abs(num) % 2 === 1) {
      sum += num;
    }
  });

  return sum;
};

const result1 = sumOddNumbers([1, 2, 3, 4, 5]);
console.log(result1);

/*
Problem: Find the Maximum Difference
Write a function findMaxDifference that takes an array of integers as input and returns the maximum difference between any two elements in the array. The difference is defined as the absolute difference between two elements, ∣a−b∣.

If the array has fewer than two elements, return 0.
*/

// const findMaxDifference = arr => {
//     // Base Case
//     if (!arr || Array.isArray(arr) === false || arr.length < 2) return 0;

//     const sortedArr = arr.sort((a, b) => a - b)

//     return sortedArr[sortedArr.length - 1] - sortedArr[0];
// }

// const result2 = findMaxDifference([1, 2, 3, 4, 5]);
// console.log(result2);

// Another Way to solve this problem
const findMaxDifference = (arr) => {
  if (!arr || Array.isArray(arr) === false || arr.length < 2) return 0;

  let min = Infinity;
  let max = -Infinity;

  for (const num of arr) {
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return max - min;
};

const result2 = findMaxDifference([10, -10, 20, -20]);
console.log(result2);

