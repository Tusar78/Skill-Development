// 7. Write a JavaScript program to sort the items of an array.

const unsortedArray = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

const bubbleSort = arr => {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = 0; j < (len - 1 - i); j++) {
      if (arr[j] > arr[j+1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
}
bubbleSort(unsortedArray)
console.log(unsortedArray);