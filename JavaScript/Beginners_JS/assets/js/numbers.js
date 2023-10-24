// let n = 1.23456;
// console.log(n);

// let str = ["Hello", "h"];
// console.log(str.test);

// let billion = 1_000_000_000;
// console.log(billion);

// let billion = 7.3e9;
// console.log(billion);

// let mcs = 1234e-2;
// console.log(mcs);

// let number = 36455445;
// console.log((36455445).toString(36));

// let num = 1.9997456;
// console.log(Math.round(num * 1000) / 1000);

// let sum = 0.1 + 0.2;
// console.log(+sum.toFixed(2));

// let sum2 = 0.28 + 0.14;
// console.log(+sum2.toFixed(2));

// console.log(isNaN('srt'));
// console.log(isNaN(NaN));

// console.log(isFinite(2465));
// console.log(NaN == NaN);

// let num = '124';
// console.log(Number.parseInt(num, 16));

// const num1 = prompt("Enter first number: ", "");
// const num2 = prompt("Enter second number: ", "");

// let sum = Number.parseFloat(num1) + Number.parseFloat(num2);
// console.log(sum + 'Px');

function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  //         3 - 0.5 + 0.75 * (5 - 3 + 1)
  return Math.round(rand);
}

const randm = randomInteger(3, 5);
console.log(randm);
