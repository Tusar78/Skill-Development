// Pattern 4
/**
1 
0 0 
1 1 1 
0 0 0 0 
1 1 1 1 1 
 */

let n = +prompt("Enter row: ");

const patterFour = n => {
  let pattern = '';
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += i%2 + ' ';
    }
    pattern += '\n';
  }

  return { pattern }
}

const {pattern} = patterFour(n);
console.log(pattern);