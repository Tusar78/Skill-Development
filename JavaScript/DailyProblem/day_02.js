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

const removeDuplicates = arr => {
    if (arr.length === 0) return [];
    
    let uniqueArray = arr.filter((item, index) => arr.indexOf(item) === index)
    return uniqueArray;
}

const result4 = removeDuplicates(["a", "b", "a", "c", "d", "b"]);
console.log(result4);


