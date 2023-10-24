// Write a program to find max and min number

let numbers = [];
for (let i = 0; i < 3; i++) {
  let num = +prompt(`Enter the number ${i+1}`);
  numbers.push(num);
}

console.log(numbers);

let minMax = prompt("Write min or max: ");
minMax = minMax.toLowerCase();

function isMin([first, second, third]) {
  let min;
  if (first < second && first < third) {
    min = first;
  } else if (second < third && second < first) {
    min = second;
  } else if (third < first && third < second) {
    min = third;
  } else {
    console.log('Equal');
  }

  return min;
}

function isMax([first, second, third]) {
  let max;
  if (first > second && first > third) {
    max = first;
  } else if (second > first && second > third) {
    max = second;
  } else if (third > first && third > second) {
    max = third;
  } else {
    console.log('Equal');
  }

  return max;
}

function minOrMax(numbers, minMax) {
  let result;
  if (minMax == 'min') {
    result = isMin(numbers);
  } else if (minMax == 'max') {
    result = isMax(numbers);
  } else {
    alert('Invalid attribute!');
  }

  return result;
}

const result = minOrMax(numbers, minMax);
console.log(`Minimum Number is: ${result}`);