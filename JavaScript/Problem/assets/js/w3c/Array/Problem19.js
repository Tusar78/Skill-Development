/*
19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/

const array1 = [1, 0, 2, 3, 4];
const array2 = [3, 5, 6, 7, 8, 13];

const newArray = [];

if (array1.length > array2.length) {
  for (let i = 0; i < array1.length; i++) {
    newArray.push(array1[i] + array2[i]);
  }
} else {
  for (let i = 0; i < array2.length; i++) {
    if (array1[i] == undefined) {
      newArray.push(array2[i]);
    } else {
      newArray.push(array1[i] + array2[i]);
    }
  }
}

console.log(newArray);
