/*
Problem 7: Find the Second Largest Number in an Array
Write a function named findSecondLargest that takes an array of numbers and returns the second largest number in the array.

Conditions
-------
    1. If the array has less than 2 unique numbers, return null.
    2. Handle edge cases like empty arrays or arrays with duplicate numbers.

Examples
---------
    findSecondLargest([3, 5, 7, 5, 6]); 
    // Output: 6

    findSecondLargest([10, 10, 10]); 
    // Output: null

    findSecondLargest([8]); 
    // Output: null

    findSecondLargest([12, 34, 23, 34, 56]); 
    // Output: 34

*/

// const findSecondLargest = arr => {
//     // Array duplication check
//     arr = [...new Set(arr)]

//     // Check Edge Case
//     if(arr.length <= 1) return null;

//     // Make unsorted to array to sorted array
//     const sortedArray = arr.sort((a, b) => b - a);

//     // Then resturn second large number
//     return sortedArray[1];    
// }

const findSecondLargest = arr => {
    // Remove duplication and sort in descending order
    arr = [...new Set(arr)].sort((a, b) => b-a);

    // Return null if there are fewer than 2 unique numbers
    return arr.length <= 1 ? null : arr[1];
}

const result7 = findSecondLargest([3, 5, 7, 5, 6]);
console.log(result7);


/*
Problem 8: Find the Factorial of a Number
Write a function named findFactorial that calculates the factorial of a given non-negative integer. The factorial of a number n is the product of all positive integers less than or equal to n.

Conditions
-----------
    1. If the input number is 0, the factorial is 1.
    2. Return null if the input is a negative number.
    3. Factorial of a number n is calculated as n * (n-1) * (n-2) * ... * 1.

Examples
--------
    findFactorial(5); 
    // Output: 120 (5 * 4 * 3 * 2 * 1)

    findFactorial(0); 
    // Output: 1

    findFactorial(-3); 
    // Output: null

*/

const findFactorial = n => {
    if(n < 0) return null; // Edge case
    if (n === 0) return 1; // Base Case

    let fact = 1;
    for (let i = n; i > 1; i--) {
        fact *= i; 
    }

    return fact;
}

const result8 = findFactorial(5);
console.log(result8);
