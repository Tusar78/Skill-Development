// Write a program to count digit
let num = +prompt("Enter the number:");

const countDigit = (num) => {
  let count=0;
  let n = num;

  while (n != 0) {
    n = Math.trunc(n / 10);
    count++;
  }

  return count;
};

let getCount = countDigit(num);
console.log(getCount);
console.log(`This number have ${getCount} digit.`);
