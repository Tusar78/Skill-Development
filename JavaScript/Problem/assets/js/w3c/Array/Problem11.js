// 11. Write a JavaScript program to find the sum of squares of a numerical vector.


// const square = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ]

// let sum = 0;

// for (let i = 0; i < square.length; i++) {
//   for (let j = 0; j < square[i].length; j++) {
//     sum += square[i][j] ** 2;   
//   }
// }

// console.log(`Sum of Square is = ${sum}`);


const square = [
  [0, 1, 1],
  [1, 1, 0],
  [0, 1, 0],
]

const square2 = [
  [],[],[]
]

for (let i = 0; i < square.length; i++) {
  for (let j = 0; j < square[i].length; j++) {
    if (square[i][j] == 1) {
      square2[i][j] = 2;
    } else {
      square2[i][j] = square[i][j];
    }
  }
}

console.log(square);
console.log(square2);