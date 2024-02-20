// Pattern Type
/*
x       x
  x   x  
    x    
  x   x  
x       x

*/

// let rows = +prompt("Enter how many row you want to see?, Plz. Enter Between 1 to 9");

// let patternFunc = n => {
//   let pattern = '';

//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i == j || j == n) {
//         pattern += 'x' + ' ';
//       } else {
//         pattern += ' ';
//       }
//     }
//     pattern += '\n';
//   }

//   return {pattern}
// }

// let {pattern} = patternFunc(n);
// console.log(pattern);

const getPattern = n => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == j || i+j == n+1) {
        pattern += 'x' + ' ';
      } else {
        pattern += '-' + ' ';
      }
    }
    pattern += '\n';
  }

  return {pattern};
}

const {pattern} = getPattern(5);
console.log(pattern);