// Pattern 1
/**
 1
 2 2
 3 3 3
 */

let n = +prompt("Enter your row number: ");

const patternTwo = n => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += i + ' ';
    }
    pattern += '\n';
  }

  return {pattern};
}

const {pattern} = patternTwo(n);
console.log(pattern);