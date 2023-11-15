// Write a program to find max number in an array

const arr = [4, 7, 8, 10, 7, 5, 97, 14, 8];

const maxNumber = arr => {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }

  return {max}
}

let {maxVal} = maxNumber(arr);
console.log(maxVal);