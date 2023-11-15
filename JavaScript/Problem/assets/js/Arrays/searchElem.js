// Write a program to find an element in an array

const arr = [4, 7, 8, 10, 9, 17, 2, 36];
const k = +prompt('which number you see?');

const findElem = (arr, k) => {
  let result;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == k) {
      result = i
      break;
    } else {
      result = 'did not find';
    }
  }

  return {
    result
  }
}

const {result} = findElem(arr, k);
console.log(result);