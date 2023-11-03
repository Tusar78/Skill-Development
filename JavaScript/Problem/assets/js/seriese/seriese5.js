// 1^2 2^2 3^2 4^2 ..... n^2

let n = +prompt("Enter your number: ");

const getSeries = (n) => {
  let series = "";
  for (let i = 1; i <= n; i++) {
    if (i == n) {
      series += i ** 2;
    } else {
      series += i ** 2 + " + ";
    }
  }

  return series;
};

let series = getSeries(n);
console.log(series);

// let n = +prompt("Enter your number: ");

// const getSeries = n => {
//   let series = '';
//   for (let i = 3; i <= n; i++) {
//     if (i % 2 != 0) {
//       series += (i ** 2) + ' ';
//     }
//   }

//   return series;
// }

// let series = getSeries(n);
// console.log(series);
