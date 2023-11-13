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

// let n = +prompt("How many row you want to show?");

// const patternFive = n => {
//   let pattern = '';

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i ; j++) {
//       pattern += String.fromCharCode(i+64) + ' ';
//     }    
//     pattern += "\n";
//   }

//   return {pattern};  
// }

// const {pattern} = patternFive(n);
// console.log(pattern);

// Pattern 5.1
/**
A B C D
A B C
A B
A
 */

// let n = +prompt("Enter how many row you want: ");

// const patternFive = n => {
//   let pattern = '';
  
//   for (let i = n; i >= 1; i--) {
//     for (let j = 1; j <= i; j++) {      
//       pattern += String.fromCharCode(j+64) + ' ';
//     }

//     pattern += '\n';
//   }

//   return {pattern};
// }

// let {pattern} = patternFive(n);
// console.log(pattern);

// Pattern 5.2
/**
A
A B
A B C
A B C D
A B C
A B
A
 */

let n = +prompt("Enter row number:");

let patternFive = n => {
  let pattern = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(i+64) + ' ';
    }
    pattern += '\n';
  }

  for (let i = n-1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += String.fromCharCode(i+64) + ' ';
    }
    pattern += '\n';
  }


  return {pattern};
}

let {pattern} = patternFive(n);
console.log(pattern);