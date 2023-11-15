// Write a program to sum of array elements

const arr = [4, 7, 8, 1, 47, 57, 41, 11];

const sumOfArray = (arr) => {
  let sum = 0;
  let display = "";
  for (let i = 0; i < arr.length; i++) {
    if (i != arr.length-1) {
      display += arr[i] + " + ";
    } else {
      display += arr[i];
    }
    sum += arr[i];
  }

  return { sum, display };
};

const { sum, display } = sumOfArray(arr);
console.log(`${display} = ${sum}`);
