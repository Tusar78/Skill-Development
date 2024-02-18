// Fibonacci series =,0,1,1,2,3,5,8,13,21,34

// let n = +prompt("Enter your number: ");

// const getSeries = (n) => {
//   let sum = 1;
//   let series = "0 1 ";
//   let n1 = 0;
//   let n2 = 1;
//   let i = 2;
//   while (i < n) {
//     series += n1 + n2 + " ";
//     sum += n1 + n2;
//     let temp = n1 + n2;
//     n1 = n2;
//     n2 = temp;
//     i++;
//   }

//   return { sum, series };
// };

// let {sum, series} = getSeries(n);
// console.log(`${series} = ${sum}`);

const num = prompt("Enter you number: ");

const getSeries = (num) => {
  let sum = 0;
  let series = "0 1 ";
  let n1 = 0;
  let n2 = 1;
  let i = 2;

  while (i < num) {
    sum += n1 + n2;
    series += n1 + n2 + " ";
    let temp = n1 + n2;
    n1 = n2;
    n2 = temp;
    i++;
  }

  return { sum, series };
};

const {sum, series} = getSeries(num);
const result = `${series} = ${sum}`;
console.log(result);