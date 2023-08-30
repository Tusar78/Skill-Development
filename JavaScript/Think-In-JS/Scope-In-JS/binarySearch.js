const arr = [3, 4, 5, 6, 7, 8, 9];
const length = arr.length;
const n = length - 1;
const data = +prompt("Enter your desire element");
let l = 0;
let r = n;

const binarySearch = (arr, low, high, data) => {
  while (low <= high) {
    let mid = low + (high-low) / 2;
    console.log(mid);
    if (data == arr[mid]) {
      return mid;
    } else if (data > arr[mid]) {
      return (low = mid + 1);
    } else {
      return (high = mid - 1);
    }
  }

  return -1;
};

const result = binarySearch(arr, l, r, data);

result == -1 ? console.log("Result not found") : console.log(`Your value position is ${result}`);
