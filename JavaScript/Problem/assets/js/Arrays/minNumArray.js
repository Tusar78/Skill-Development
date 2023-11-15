// Write a program to find min number in an array

// const arr = [4, 7, 8, 10, 7, 5, 97, 14, 8];

const arr = [4, 7, 8, 10, 7, 5, 97, 14, 8, 1];

const maxNumber = arr => {
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i]
    }
  }

  return {min}
}

let {min} = maxNumber(arr);
console.log(min);