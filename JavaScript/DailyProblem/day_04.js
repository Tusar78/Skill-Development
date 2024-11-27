/*
Problem 10: Check if Two Strings are Anagrams
Write a function named isAnagram that checks if two given strings are anagrams of each other. Two strings are considered anagrams if they can be rearranged to form the same word or phrase, ignoring spaces and capitalization.

Conditions
---------
    1. Ignore spaces and capitalization.
    2. Return true if the strings are anagrams, otherwise false.

Examples
---------
    isAnagram("listen", "silent"); 
    // Output: true

    isAnagram("hello", "world"); 
    // Output: false

    isAnagram("The eyes", "They see"); 
    // Output: true
*/

// My attempt
// const isAnagram = (str1, str2) => {
//   // Edge Case
//   if (!str1 || typeof str1 !== "string" || !str2 || typeof str2 !== "string")
//     return false;

//   // Base case
//   str1 = str1.replace(/[^a-z0-9]/gi, '').toLowerCase();
//   str2 = str2.replace(/[^a-z0-9]/gi, '').toLowerCase();

//   const str1Set = new Set(str1);

//   const result = [...str2].filter(str => str1Set.has(str));
//   return result.length === str1.length;
// };

// const result10 = isAnagram("The eyes", "They see");
// console.log(result10);

// Try to anothe way
function isAnagram(str1, str2) {
  // Edge case
  if (typeof str1 !== "string" || typeof str2 !== "string" || !str1 || !str2)
    return false;

  const normalize = (str) => str.replace(/[^a-z0-9]/gi, '').toLowerCase().split('').sort().join('');

  return normalize(str1) === normalize(str2);
}

const result10 = isAnagram("The eyes", "They see");
console.log(result10);


/*
Problem 11: Check if an Array is Sorted
Write a function to check whether a given array of numbers is sorted in ascending order.

Function Signature
---------------
function isSorted(arr) {
    // Your code here
}
  Example Test Cases
  Input: [1, 2, 3, 4, 5]
  Output: true
  (Explanation: The array is sorted in ascending order.)

  Input: [5, 3, 8, 1]
  Output: false
  (Explanation: The array is not sorted in ascending order.)

  Input: [10, 20, 30, 40]
  Output: true

  Input: [10, 20, 15, 30]
  Output: false

  Input: []
  Output: true
  (Explanation: An empty array is considered sorted.)
*/

const isSorted = arr => {
  // Edge case
  if(!Array.isArray(arr)) return `Enter only array`;

  if (arr.length === 0) {
    return true;
  }

  const newArr = arr.join('');
  const sortedArr = [...arr].sort((a, b) => a - b).join('');
  
  return newArr === sortedArr
}

const result11 = isSorted([10, 20, 30, 40]);
console.log(result11);


/*
Problem 12: Count Vowels in a String
Write a function called countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. Both uppercase and lowercase vowels should be counted.

Input
A string (e.g., "Hello World!").

Output
------
A number representing the count of vowels in the string (e.g., 3).

Requirements
-------------
  1. Ignore non-alphabetical characters.
  2. Consider both uppercase and lowercase vowels (a, e, i, o, u).
  3. Return 0 for empty strings or strings with no vowels.

Examples
--------
  countVowels("Hello World!"); // Output: 3
  countVowels("JavaScript");   // Output: 3
  countVowels("");             // Output: 0
  countVowels("rhythm");       // Output: 0
  countVowels("AEIOUaeiou");   // Output: 10
*/

const countVowels = str => {
  // Edge case
  if (typeof str !== 'string') return `Please give me text`;

  str = str.trim().toLowerCase();  
  
  let count = 0;
  for (const char of str) {    
    if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
      count += 1;
    }
  }

  return count;
}

const result12 = countVowels("AEIOUaeiou");
console.log(result12);
