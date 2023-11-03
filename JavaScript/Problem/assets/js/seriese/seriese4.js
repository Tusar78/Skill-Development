// 1.5 2.5 3.5 4.5 .... n

let n = +prompt("Enter your number: ");

const getSeries = n => {
  let series = '';
  for (let i = 3; i <= n; i++) {
    if (i % 2 != 0) {
      series += (i / 2) + ' ';
    }
  }

  return series;
}

let series = getSeries(n);
console.log(series);