const matrixOne = [
  [1, 2, 3],
  [4, 5, 6],
];

let matrixTwo = [
  [],
  [],
  []
];

for (let i = 0; i < 2; i++) {
  for (let j = 0; j < 3; j++) {
    matrixTwo[j][i] = matrixOne[i][j];    
  }
}

console.log(matrixOne);
console.log(matrixTwo);