// Get Data From Users
const row = +prompt("Enter Row: ");
const col = +prompt("Enter Column: ");

const matrixOne = [];
const matrixTwo = [];

for (let i = 0; i < row; i++) {
  matrixOne[i] = [];
  for (let j = 0; j < col; j++) {
    matrixOne[i][j] = +prompt("Enter Your Value: ");
  }
}
console.log(arr);