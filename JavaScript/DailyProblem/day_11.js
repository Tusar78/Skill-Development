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

const isLeapYear = year => {
    // Edge case 
    if (typeof year !== 'number' || year < 1) {
       return "Please Provide a valid year!";        
    }
    
    // Base case
    if (year % 400 === 0) {
        return true
    } 

    if (year % 4 === 0) {
        if (year % 100 !== 0) {
            return true
        } else {
            return false
        }
    } else {
        return false
    }

   
}

const result = isLeapYear(2019);
console.log(result);
