//Series
// 1 + 2 + 3 + 5 + .... + n;

// let num = +prompt("Enter any number: ");
let num = 10;

const getSeries = (num) => {
  let sum = 0;
  let series = "";

  for (let i = 1; i <= num; i++) {
    if (i % 2 != 0) {
      sum += i;
      if (i == n) {
        series += i;
      } else {
        series += i + " + ";
      }
    }
  }

  return { sum, series };
};

const { sum, series } = getSeries(num);
console.log(series.slice(0, -2));
console.log(series);
console.log(sum);
