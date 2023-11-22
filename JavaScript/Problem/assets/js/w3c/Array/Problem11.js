// 11. Write a JavaScript program to find the sum of squares of a numerical vector.


const square = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

let sum = 0;

for (let i = 0; i < square.length; i++) {
  for (let j = 0; j < square[i].length; j++) {
    sum += square[i][j] ** 2;   
  }
}

console.log(`Sum of Square is = ${sum}`);