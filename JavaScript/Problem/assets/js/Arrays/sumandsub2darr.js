// Get Data From Users
const row = +prompt("Enter Row: ");
const col = +prompt("Enter Column: ");

const arr = [];

for (let i = 0; i < row; i++) {
  arr[i] = [];
  for (let j = 0; j < col; j++) {
    arr[i][j] = +prompt("Enter Your Value: ");
  }
}
console.log(arr);