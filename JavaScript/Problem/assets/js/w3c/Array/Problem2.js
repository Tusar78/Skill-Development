// Write a JavaScript function to clone an array.


// My Way 01 => For loop
const arrOne = [1, 2, 3, 4];

// const cloneArray = arr => {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i];    
//   }

//   return {newArr};
// }

// const {newArr} = cloneArray(arrOne);
// console.dir(newArr);
// console.dir(arrOne);

// Way 02 => Slice
// const cloneArray = arr => {
//   let newArr = [];
//   newArr = arr.slice();
//   return {newArr};
// }

// const {newArr} = cloneArray(arrOne);
// console.log(newArr);

// Way 02 => spread
const cloneArray = arr => {
  let newArr = [...arr];
  return {newArr}
}

const {newArr} = cloneArray(arrOne);
console.log(newArr);