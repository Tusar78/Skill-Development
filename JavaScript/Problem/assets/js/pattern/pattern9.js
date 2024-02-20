// Pattern Type
/*
x
x x
x   x
x     x
x x x x x

*/

let rows = +prompt(
  "Enter How Many Rows You Want to see, 'Press Enter between 1 to 9'"
);

// const patternOne = (n) => {
//   let pattern = "";
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       if (i == n || j == 1 || j == i) {
//         pattern += "x" + " ";      
//       } else {
//         pattern += "  ";      
//       }
//     }
//     pattern += "\n";
//   }

//   return { pattern };
// };

// let {pattern} = patternOne(rows);
// console.log(pattern);

const getPattern = n => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (j == 1 || i == n || j == i) {
        pattern += 'x' + ' ';
      } else {
        pattern += '-' + ' ';
      }
    }
    pattern += '\n';
  }

  return {pattern};
}

const {pattern} = getPattern(rows);
console.log(pattern);