/*
20. Write a JavaScript program to find duplicate values in a JavaScript array.
*/

const array = [1, 5, 7, 1, 8, 5, 8];
let len = array.length;

const duplicate = [];

for (let i = 0; i < len; i++) {
  for (let j = i + 1; j < len; j++) {
    if (array[i] == array[j]) {
      duplicate.push(array[i]);
    }    
  }  
}

console.log(array);