// 12. Write a JavaScript program to compute the sum and product of an array of integers.

const arr = [1, 2, 3, 4, 5];

const sumAndProduct = (arr, operator) => {
  let result;

  if (operator == 'sum') {
    result = 0;
    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
    }
  } else if (operator == 'product') {
    result = 1;
    for (let i = 0; i < arr.length; i++) {
      result *= arr[i];
    }
  } else {
    result = 'Please Enter valid arguments'
  }

  return {result};
}

const {result} = sumAndProduct(arr, 'product');
console.log(`${arr} = ${result}`);