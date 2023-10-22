const numbers = [10, 2, 3, 4, 8, 50, 9, 7];

function linearSearch(arr, n, x) {
  for (let i = 0; i < n; i++) {
    if (arr[i] == x) {
      return i;
    }
  }

  i = -1;
  return i;
}

const result = linearSearch(numbers, numbers.length, 4);
console.log(result);