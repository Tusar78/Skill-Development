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

for (let i = 0; i < row; i++) {
  matrixTwo[i] = [];
  for (let j = 0; j < col; j++) {
    matrixTwo[i][j] = +prompt("Enter Your Value: ");
  }
}


const sumTwoMatrix = (m1, m2) => {
  const resultMatrix = [];
  for (let i = 0; i < m1.length; i++) {
    resultMatrix[i] = [];
    for (let j = 0; j < m1.length; j++) {
      resultMatrix[i][j] = m1[i][j] * m2[i][j];      
    }
  }

  return resultMatrix;
}

const resultMatrix = sumTwoMatrix(matrixOne, matrixTwo);
console.log(resultMatrix);