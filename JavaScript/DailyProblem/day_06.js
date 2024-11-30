/**
 * Problem 16: Find the First Non-Repeated Character in a String
 * 
 */




/**
Problem 16: Find the First Non-Repeated Character in a String

Write a function to find the first non-repeated (unique) character in a given string. If all characters are repeated or the string is empty, return null.

Input:
    A string containing any characters, including spaces.

Output:
---------
    The first non-repeated character in the string, or null if no unique character exists.

Example
------
    Input: "swiss"  
    Output: "w"  
    Input: "success"  
    Output: "u"  
    Input: "aabbcc"  
    Output: null  

Constraints:
    1. The function should handle both uppercase and lowercase letters.
    2. Ignore whitespace when checking for non-repeated characters.
 */

// const findNonRepeatedChar = str => {
//     // Edge Case
//     if (!str || typeof str !== 'string') return null;

//     // Find Repeated Character
//     let storeRepetedStr = {};
//     let strToArr = [...str];
//     for (const char of strToArr) {
//         storeRepetedStr[char]  = storeRepetedStr[char] ? storeRepetedStr[char] + 1 : 1;
//     }
    
//     let uniqueChars = [];
//     for (const key in storeRepetedStr) {
//         if (Object.prototype.hasOwnProperty.call(storeRepetedStr, key)) {
//             if (storeRepetedStr[key] == 1) {
//                 uniqueChars.push(key)                
//             }        
//         }
//     }

//     return uniqueChars.length < 1 ? null : uniqueChars[0]
// }

// const result16 = findNonRepeatedChar('swiss');
// console.log(result16);

// Better Solution
const findNonRepeatedChar = str => {
    // Edge Case
    if (!str || typeof str !== 'string') return null;

    // Count Occurrences
    const charCount = {}
    
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // Find the first non-repeated character
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    

    return null;
}

const result16 = findNonRepeatedChar('swiss');
console.log(result16);