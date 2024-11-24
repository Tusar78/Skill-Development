/*
Problem 4: Remove Duplicates from an Array

Write a function named removeDuplicates that takes an array as input and returns a new array with all the duplicate elements removed.

Conditions
----------
    1. The function should be named removeDuplicates.
    2. It should accept a single parameter (the array).
    3. It should return a new array with unique elements only.

Examples
---------
removeDuplicates([1, 2, 3, 1, 2, 4, 5]); // Output: [1, 2, 3, 4, 5]
removeDuplicates(["a", "b", "a", "c", "d", "b"]); // Output: ["a", "b", "c", "d"]
removeDuplicates([5, 5, 5, 5]); // Output: [5]

*/

// const removeDuplicates = arr => {
//     if (arr.length === 0) return [];

//     let arrToSet = new Set(arr)
//     let uniqueArray = [...arrToSet];
//     return uniqueArray;
// }

// const result4 = removeDuplicates(["a", "b", "a", "c", "d", "b"]);
// console.log(result4);

// const removeDuplicates = arr => {
//     if (arr.length === 0) return [];

//     let uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index)
//     return uniqueArray;
// }

// const result4 = removeDuplicates(["a", "b", "a", "c", "d", "b"]);
// console.log(result4);

/*

Problem 5: Count the Occurrences of Elements in an Array
-----------------
Write a function named countOccurrences that takes an array as input and returns an object. The object should have each unique element of the array as a key, and the number of times it occurs as the value.

Conditions
----------
    1. The function should be named countOccurrences.
    2. It should accept a single parameter (the array).
    3. It should return an object with the count of each element.

Examples
--------
    countOccurrences([1, 2, 3, 2, 1, 5, 1]); 
    // Output: { 1: 3, 2: 2, 3: 1, 5: 1 }

    countOccurrences(["a", "b", "a", "c", "d", "b", "a"]); 
    // Output: { a: 3, b: 2, c: 1, d: 1 }

    countOccurrences([]); 
    // Output: {}
*/

const countOccurrences = (arr) => {
  if (arr.length === 0) return {};

  const count = {};
  for (const elem of arr) {
    // if (!count[elem]) {
    //   count[elem] = 1;
    // } else {
    //   count[elem] += 1;
    // }

    count[elem] = count[elem] ? count[elem] + 1 : 1
  }

  return count;
};

const result5 = countOccurrences(["a", "b", "a", "c", "d", "b", "a"]);
console.log(result5);


/**
Problem 6: Check if a String is a Palindrome
---
Write a function named isPalindrome that checks whether a given string is a palindrome. A palindrome is a word, phrase, or sequence that reads the same backward as forward (ignoring case and non-alphanumeric characters).

Conditions
----
    1. The function should take one string as input.
    2. It should return true if the string is a palindrome and false otherwise.
    3. Ignore spaces, punctuation, and capitalization when checking for palindromes.

Examples
-------
    isPalindrome("madam"); 
    // Output: true

    isPalindrome("racecar"); 
    // Output: true

    isPalindrome("Hello"); 
    // Output: false

    isPalindrome("A man, a plan, a canal: Panama"); 
    // Output: true

 */