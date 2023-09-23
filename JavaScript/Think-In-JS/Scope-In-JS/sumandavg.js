const n = +prompt("How many number you enter?");

const numbers = [];

let i = 1;
while (i <= n) {
  const userInput = +prompt(`Enter your ${i} number`);
  numbers.push(userInput);
  i++;
}

const avgFunc = (sum, n)  => {
  return sum / n;
}

const sumFunc = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const sum = sumFunc(numbers);
const avg = avgFunc(sum, n);

console.log(`Summation of Three Numbers is = ${sum}` );
console.log(`These Numbers Average is = ${avg}` );