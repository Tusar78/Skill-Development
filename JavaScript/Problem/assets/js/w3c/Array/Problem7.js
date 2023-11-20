// 7. Write a JavaScript program to sort the items of an array.

const unsortedArray = [ -13, 84, 17, 6, 5, -41, 73, 22, 10 ];
  let len = unsortedArray.length;

// const bubbleSort = arr => {
//   let len = arr.length;
//   for (let i = 0; i < len - 1; i++) {
//     for (let j = 0; j < (len - 1 - i); j++) {
//       if (arr[j] > arr[j+1]) {
//         let temp = arr[j];
//         arr[j] = arr[j+1];
//         arr[j+1] = temp;
//       }
//     }
//   }
// }
// bubbleSort(unsortedArray)
// console.log(unsortedArray);

// const sorted = unsortedArray.sort((a, b) => b-a);
// console.log(sorted);

// Second Large Item
for (let i = 0; i < len - 1; i++) {
  for (let j = 0; j < len - 1 - i; j++) {
    if (unsortedArray[j] < unsortedArray[j+1]) {
      let temp = unsortedArray[j];
      unsortedArray[j] = unsortedArray[j+1];
      unsortedArray[j+1] = temp;
    }
  }
}

console.log(unsortedArray);
console.log(`Second Large Number is = ${unsortedArray[1]}`);
console.log(`Second Smallest Number is = ${unsortedArray[unsortedArray.length - 2]}`);