// Write program to print a series like fibonacci using an array

let n = +prompt("Enter how many number you see?");

const fiboArray = n => {
  const fibo = [];
  fibo[0] = 0;
  fibo[1] = 1;

  for (let i = 2; i <= n ; i++) {
    fibo[i] = fibo[i - 2] + fibo[i - 1];
  }

  return {fibo}
}

let {fibo} = fiboArray(n);
console.log(fibo);