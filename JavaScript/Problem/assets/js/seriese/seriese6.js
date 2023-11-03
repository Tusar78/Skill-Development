// 1/1 1/2 1/3 1/4 ..... 1/n

let n = +prompt("Enter your number: ");

const getSeries = (n) => {
  let series = "";
  for (let i = 1; i <= n; i++) {
    if (i == n) {
      series += 1 / i;
    } else {
      series += 1 / i + ' + ';
    }
  }

  return series;
};

let series = getSeries(n);
console.log(series);