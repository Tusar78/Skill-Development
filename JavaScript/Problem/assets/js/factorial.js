// Write a program to calculate a factorial

let num = +prompt("Enter the positive number.");

const getFactorial = f => {
  let fact = 1;
  for (let i = 1; i <= f; i++) {
    fact *= i;    
  }

  return fact;
}

const fact = getFactorial(num);
alert(fact);