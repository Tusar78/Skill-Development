// Write a program to check a number positive or negative

let num = +prompt("Enter the valid number: ");

const isPositiveOrNegative = num => {
  let result;
  if (num > 0) {
    result = 'Positive';
  } else if(num < 0) {
    result = 'Negative';
  } else {
    result = 'Zero'
  }

  return result;
}

let result = isPositiveOrNegative(num);
console.log(`${num} is ${result} Number`);