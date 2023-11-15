// Pattern Type
/*
x       x
  x   x  
    x    
  x   x  
x       x

*/

let n = +prompt("Enter how many row you want to see?");

let patternFunc = n => {
  let pattern = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == j || j == n) {
        pattern += 'x' + ' ';
      } else {
        pattern += ' ';
      }
    }
    pattern += '\n';
  }

  return {pattern}
}

let {pattern} = patternFunc(n);
console.log(pattern);