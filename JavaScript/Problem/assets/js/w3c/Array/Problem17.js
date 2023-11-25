// Write a JavaScript program to shuffle an array.

const arr = [1, 2, 3, 4, 5, 7, 8, 9];

const newArr = [];

for (let i = 0; i < arr.length; i++) {
  let rand = Math.ceil(Math.random() * i);
  newArr.push(arr[rand]);  
}


console.log(arr);
console.log(newArr);