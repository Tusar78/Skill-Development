// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.

// Way 01 => Loop
const myArray = [4, 7, 8, 9, 87];

// let getSubArray = (arr, n = 1) => {
//   let newArray = [];
//   let initial = arr.length - n;

//   if (arr.length != 0 && n <= arr.length) {
//     for (let i = initial; i < arr.length; i++) {
//       newArray[i-initial] = arr[i];
//     }
//   }

//   if (newArray.length == 1) {
//     return newArray[0];
//   } else {
//     return newArray;
//   }
// };

// const result = getSubArray(myArray, 4);
// console.log(result);

// Way 02 => Slice
let getSubArray = (arr, n = 1) => {
  let newArray = [];

  if (arr.length != 0 && n <= arr.length) {
    newArray = arr.slice(-n)
  }

  if (newArray.length == 1) {
    return newArray[0];
  } else {
    return newArray;
  }
};

const result = getSubArray(myArray, 3);
console.log(result);