/**
 * 8. Write a JavaScript program to find the most frequent item in an array.
  Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
  Sample Output : a ( 5 times )
 */


const arr = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

const newARr = [];
let max = 0; 
let letter;

for (let i = 0; i < arr.length; i++) {
  let count = 0;

  for (let j = 0; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      count++;
    }
  }

  if (count > max) {
    max = count;
    letter = arr[i];
  }

}
console.log(max);
console.log(letter);