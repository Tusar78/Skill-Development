// Write a program to find out a number is even or odd

let num = +prompt("Enter the positive number: ");

const isEvenOrOdd = num => {
  let result;
  if (num % 2 == 0) {
    result = 'Even';
  } else {
    result = 'Odd'
  }

  return result;
}

const evenOdd = isEvenOrOdd(num);
console.log(`${num} is ${evenOdd} number`);