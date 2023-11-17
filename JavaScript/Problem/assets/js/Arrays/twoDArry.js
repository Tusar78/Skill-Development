// let twoDArray = [[10, 20, 30],[40, 45, 55]];

// for (let i = 0; i <twoDArray.length; i++) {
//   for (let j = 0; j < twoDArray[i].length; j++) {
//     console.log(twoDArray[i][j]);
//   }
// }

// Insert 2D Array
// let simpleMatrix = [[], [], []];
// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     let n = +prompt('Enter random number');
//     simpleMatrix[i][j] = n;
//   }
// }

// console.log(simpleMatrix);

// let simpleMatrix = [[], []];
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < 2; j++) {
//     let n = +prompt(`simpleMatrix [${i}] [${j}]`);
//     simpleMatrix[i][j] = n;
//   }
// }

let simpleMatrix = [
  [1, 2],
  [3, 4],
];
let simpleMatrix2 = [
  [5, 6],
  [7, 8],
];

for (let i = 0; i < simpleMatrix.length; i++) {
  console.log(simpleMatrix[i]);
}
for (let i = 0; i < simpleMatrix.length; i++) {
  console.log(simpleMatrix2[i]);
  
}

const sum2D = (arr, arr2) => {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    let row = [];
    for (let j = 0; j < arr[i].length; j++) {
      row.push(arr[i][j] + arr2[i][j]);
    }
    result.push(row);
  }

  return result;
};

let result = sum2D(simpleMatrix, simpleMatrix2);
console.log(result);
