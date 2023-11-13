/*
Pattern Number: 06
------------------
* 
* *
* * *
* *
*
*/

let n = +prompt("Enter row: ");

const patternSix = n => {
  let pattern  = '';

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += 'x' + ' ';
    }
    pattern += '\n';
  }

  for(let i = n-1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern += 'x' + ' ';
    }
    pattern += '\n';
  }

  return {pattern};
}

let {pattern} = patternSix(n);
console.log(pattern);