// Write a program to calculate GCD and LCM

let num1 = +prompt("Enter your first number: ");
let num2 = +prompt("Enter your second number: ");

const getGCD = (num1, num2) => {
  let n1 = num1;
  let n2 = num2;

  while (n2 != 0) {
    let rem = n1 % n2;
    n1 = n2;
    n2 = rem;
  }

  let gcd = n1;
  let lcm = (num1 * num2) / gcd;

  return [gcd, lcm];
}

let getGCDorLCM = getGCD(num1, num2);
console.log(getGCDorLCM);