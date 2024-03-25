// 1 to 10 summation using recursive
// let result = 0;
// function sumFunc(n) {
//     if (n === 5) {
//         return
//     }

//     result += n;    
//     sumFunc(n + 1);
// }

// sumFunc(1)
// console.log(result);

// function sum(n) {
//     if (n == 0) {
//         return 0;
//     } else {
//         return sum(n - 1) + n;
//     }
// }

// console.log(sum(5));

/**
 * Behind the scene
sum(3)
sum(2) + 3
sum(1) + 2 + 3
sum(0) + 1 + 2 + 3
0 + 1 + 2 + 3
*/

// Reursion generate call stack erro when you work big data
function sum(n) {
    if (n === 0) {
        return 0;
    } else {
        return sum(n - 1) + n;
    }
}

console.log(sum(9999));