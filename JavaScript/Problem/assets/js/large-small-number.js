// Write a program to find max and min number

let numbers = [1,2,3];
// for (let i = 0; i < 3; i++) {
//   let num = +prompt(`Enter the number ${i+1}`);
//   numbers.push(num);
// }

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
  }
}

function minOrMax(numbers, minMax) {
  let result;
  if (minMax == 'min') {
    result = isMin(numbers)
  }

  return result;
}

const result = minOrMax(numbers, minMax);
console.log(`Minimum Number is: ${result}`);