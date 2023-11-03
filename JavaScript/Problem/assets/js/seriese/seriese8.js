// Series 1^2 x 2^2 x 3^2 x 4^2 x 5^2 x ... x n^2

let n = +prompt("Enter your number: ");

let getSeries = n => {
  let mul = 1;
  let series = '';

  for (let i = 1; i <= n; i++) {
    if (i == n) {
      series += i ** 2;
    } else {
      series += (i ** 2) + ' x ';
    }
    mul *= i ** 2;
  }

  return {mul, series};
}

let {mul, series} = getSeries(n);

console.log(`${series} = ${mul}`);