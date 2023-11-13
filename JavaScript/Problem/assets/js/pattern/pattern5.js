// Pattern 5
/**
A
A B
A B C
A B C D
 */

// let n = +prompt("How many row you want to show?");

// const patternFive = n => {
//   let pattern = '';

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i ; j++) {
//       pattern += String.fromCharCode(j+64) + ' ';
//     }    
//     pattern += "\n";
//   }

//   return {pattern};  
// }

// const {pattern} = patternFive(n);
// console.log(pattern);

// Pattern 5.1
/**
A
B B
C C C
D D D D
 */

let n = +prompt("How many row you want to show?");

const patternFive = n => {
  let pattern = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i ; j++) {
      pattern += String.fromCharCode(i+64) + ' ';
    }    
    pattern += "\n";
  }

  return {pattern};  
}

const {pattern} = patternFive(n);
console.log(pattern);