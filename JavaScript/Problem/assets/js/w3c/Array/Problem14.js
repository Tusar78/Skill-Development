// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const arr = [1, 2, 3, 5, 2, 3, 7, 9, 1];
console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i+1; j < arr.length; j++) {
//     if (arr[i] == arr[j]) {
//       arr.splice(j, 1)
//     }
//   }  
// }

// console.log(arr);

// Way 01 - For Loop
// const repeatItemRemove = arr => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] == arr[j]) {
//         arr.splice(j, 1);
//       }
//     }    
//   }
// }

// repeatItemRemove(arr);
// console.log(arr);

// Way 02 - Includes Method
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (newArr.includes(arr[i]) != true) {
//     newArr.push(arr[i])
//   }
// } 
// console.log(newArr);

// Way 03 - Index Of
// const newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (newArr.indexOf(arr[i]) == -1) {
//     newArr.push(arr[i])
//   }  
// }

// console.log(newArr);

// Repeat Looping Way
for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1);
    }   
  }  
}

console.log(arr);