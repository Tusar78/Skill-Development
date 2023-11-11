// Series : 1 - 2 + 3 - 4 + 5 - 6 + ......+-n;

let n = +prompt("Enter your number");

const getSeries = (n) => {
  let sum = 0;
  let series = "";

  for (let i = 1; i <= n; i++) {
    if (i == 1) {
      series += i;
      sum += i;
    } else if (i % 2 != 0) {
      
      series += " + " + i;
      sum += i;
    } else {
      series += " - " + i;
      sum -= i;
    }
  }

  return { sum, series };
};

let { sum, series } = getSeries(n);

// Print Series
console.log(`${series} = ${sum}`);
