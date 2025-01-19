/*
Problem: Check Leap Year
Write a function that determines if a given year is a leap year. A year is a leap year if it satisfies the following conditions:

The year is evenly divisible by 4.
However, if the year is evenly divisible by 100, it is not a leap year unless:
The year is also evenly divisible by 400.

Function Signature:
javascript
Copy
Edit
function isLeapYear(year: number): boolean
Input:
year (number): A positive integer representing a year.
Output:
Return true if the year is a leap year, otherwise return false.
Example:
Input:
javascript
Copy
Edit
isLeapYear(2020); // true
isLeapYear(1900); // false 
isLeapYear(2000); // true
isLeapYear(2023); // false
*/

// console.time('time-start')
// const isLeapYear = year => {
//     // Edge case
//     if (typeof year !== 'number' || year < 1) {
//        return "Please Provide a valid year!";
//     }

//     // Base case
//     if (year % 400 === 0) {
//         return true
//     }

//     if (year % 4 === 0) {
//         if (year % 100 !== 0) {
//             return true
//         } else {
//             return false
//         }
//     } else {
//         return false
//     }

// }

// const result = isLeapYear(2019);
// console.log(result);
// console.timeEnd('time-start')

// console.time('time-start')
// const isLeapYear = year => {
//     // Edge case
//     if (typeof year !== 'number' || year < 1) {
//         console.log('Please Provide a valid year!');
//     }

//     // Base Case
//     return (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
// }

// const result = isLeapYear(2024);
// console.log(result);
// console.timeEnd('time-start')

/*
Prime Number Problem
Problem Statement: Write a function to check whether a given number is a prime number. A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Function Signature:

javascript
Copy
Edit
const isPrime = num => { 
    // your code here
}
Input:

A single integer num.
Output:

Return true if the number is a prime number.
Return false if the number is not a prime number.
If the input is not a positive integer greater than 1, return "Invalid input".
*/

const isPrime = (num) => {
  // Edge case
  if (typeof num !== "number" || num < 1) {
    return "Invalid input, Please Provide a valid number";
  }

  // Base Case
  let count = 0;
  if (num === 1) {
    count = 1;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      count++;
    }
  }

  return count === 0 ? true : false;
};

const result = isPrime(9);
console.log(result);
