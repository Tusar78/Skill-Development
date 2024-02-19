// Pattern 1
/**
 1
 1 2
 1 2 3
 */

 let n = +prompt("How Many Row you need?");

//  const patternOne = n => {
//   let pattern = '';
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= i; j++) {
//       pattern += j + ' ';
//     }
//     pattern += '\n';
//   }

//   return {pattern}
//  }

// const {pattern} = patternOne(n);
// console.log(pattern);

const getPattern = num => {
  let pattern = '';
  for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i ; j++) {
      pattern += i;
    }
    pattern += '\n';
  }

  return {pattern}
}

const {pattern} = getPattern(n);
console.log(pattern);