// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.

// Way 01 => Loop
const myArray = [4, 7, 8, 9, 87];

let getSubArray = (arr, n = 1) => {
  let newArray = [];

  if (arr.length != 0) {
    for (let i = 0; i < n; i++) {
      newArray[i] = arr[i];
    }
  }

  if (newArray.length == 1) {
    return newArray[0];
  } else {
    return newArray;
  }
};

const result = getSubArray([], 3);
console.log(result);
