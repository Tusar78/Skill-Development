// Another Series
// 1x2 + 2x3 + 3x4 + . . . . .  + n x n+1

// let num1 = +prompt("Enter first number: ");
// let num2 = +prompt("Enter second number: ");

// const getSeries = (num1, num2) => {
//   let n1 = 1;
//   let n2 = 2;
//   let sum = 0;
//   let series = '';

//   while (n1 <= num1 && n2 <= num2) {
//     sum += n1 * n2;
//     n1 += 1;
//     n2 += 1;
//   }

//   return sum;
// }

// const series = getSeries(num1, num2);
// console.log(series);

// let num1 = +prompt("Enter first number: ");

// const getSeries = (num1) => {
//   let n1 = 1;
//   let sum = 0;
//   let series = '';

//   for (let i = 1; i <= num1; i++) {
//     for (let j = 2; j <= num1; j++) {
//       sum += i * j;
//       series += i+'x'+j + ' + ';
//     }

//   }

//   return {sum, series};
// }

// const {sum, series}= getSeries(num1);
// console.log(series);
// console.log(sum);

// let num1 = +prompt("Enter first your number: ");
// let num2 = +prompt("Enter second your number: ");

// function getSeries(num1, num1) {
//   let n1 = 1;
//   let n2 = 2;
//   let sum = 0;

//   while (n1 <= num1 && n2 <= num2) {
//     sum += n1 * n2;
//     n1++;
//     n2++;
//   }

//   return sum;
// }

// let series = getSeries(num1, num2);
// console.log(series);

// Series 3.1
// (1x2)=2 + (2x3)=6  + (3x4)=12 + . . . . .  + n1 x n2 = summation

// const num1 = prompt("Enter your first number: ");
// const num2 = prompt("Enter your second number: ");

// const getSeries = (num1, num2) => {
//   let n1 = 1,
//     n2 = 2,
//     sum = 0,
//     series = "";

//   while (n1 <= num1 && n2 <= num2) {
//     sum += n1 * n2;
//     series += `(${n1}x${n2})=${n1 * n2} + `;
//     n1 += 1;
//     n2 += 1;
//   }

//   return {sum, series};
// };

// const {sum, series} = getSeries(num1, num2);
// const result = `${series} = ${sum}`;
// console.log(result);

// Series 3.2
// (1x3)=3 + (2x5)=10  + (3x7)=21 + . . . . .  + (n1xn2) = summation

const num1 = +prompt("Enter your first number: ");
const num2 = +prompt("Enter your second number: ");

const getSeries = (num1, num2) => {
  let n1 = 1,
    n2 = 3,
    sum = 0,
    series = "";

  while (n1 <= num1 && n2 <= num2) {
    sum += n1 * n2;
    series += `(${n1}x${n2})=${n1 * n2} + `;
    n1 += 1;
    n2 += 2;
  }
  return { sum, series };
};

const { sum, series } = getSeries(num1, num2);
const result = `${series.slice(0, -2)} = ${sum}`;
console.log(result);
