// Series 1 x 2 x 3 x 4 x 5 x ... x n

let n = +prompt("Enter your number: ");

let getSeries = n => {
  let mul = 1;
  let series = '';

  for (let i = 1; i <= n; i++) {
    if (i == n) {
      series += i;
    } else {
      series += i + ' x ';
    }
    mul *= i;
  }

  return {mul, series};
}

let {mul, series} = getSeries(n);

console.log(series);
console.log(mul);