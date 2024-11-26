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

