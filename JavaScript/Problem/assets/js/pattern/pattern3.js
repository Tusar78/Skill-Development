// Pattern 1
/**
 1
 1 0
 1 0 1
 */

 let n = +prompt("Enter your row number: ");

//  const patternTwo = n => {
//    let pattern = '';
//    for (let i = 1; i <= n; i++) {
//      for (let j = 1; j <= i; j++) {
//        pattern += (j % 2) + ' ';
//      }
//      pattern += '\n';
//    }
 
//    return {pattern};
//  }
 
//  const {pattern} = patternTwo(n);
//  console.log(pattern);

// const getPattern = num => {
//   let pattern = '';
//   for (let i = 1; i <= num; i++) {
//     for (let j = 1; j <= i; j++) {
//       pattern += j % 2 != 0 ? j : j % 2;
//     }
//     pattern += '\n';
//   }

//   return {pattern}
// }

// const {pattern} = getPattern(n);
// console.log(pattern);

const getPattern = num => {
  let pattern = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += i % 2;
    }
    pattern += '\n';
  }

  return {pattern}
}

const {pattern} = getPattern(n);
console.log(pattern);