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

const binarySearch = (arr, k) => {
  let left = 0;
  let right = arr.length-1;
  
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    // console.log(mid);
    if (arr[mid] == k) {
      return mid;
    } else if (k > arr[mid]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

const res = binarySearch(items, 4);
console.log(res);