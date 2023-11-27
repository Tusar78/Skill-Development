/*
18. Write a JavaScript program to perform a binary search.
Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
*/

const items = [1, 2, 3, 4, 5, 7, 8, 9, 12];

// const binarySearch = (arr, k) => {
//   let left = 0;
//   let right = arr.length-1;
  
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
//     // console.log(mid);
//     if (arr[mid] == k) {
//       return mid;
//     } else if (k > arr[mid]) {
//       left = mid + 1;
//     } else {
//       right = mid - 1;
//     }
//   }
// }

// const res = binarySearch(items, 4);
// console.log(res);

// Sort then search.
const dummyArray = [2, 4, 0, 1, 9, 7, 5];
console.log(dummyArray);

const getSort = (arr) => {
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    for (let j = i+1; j < len; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }    
  }
}

getSort(dummyArray); // Array sorted
console.log(dummyArray);

// Let's start binary search
const binarySearch = (arr, data) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (data == arr[mid]) {
      return mid;
    } else if (data > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

const result = binarySearch(items, 5);
console.log(result);