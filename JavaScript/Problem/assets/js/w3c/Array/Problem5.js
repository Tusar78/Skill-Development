// 5. Write a simple JavaScript program to join all elements of the following array into a string.

// Way 01 = Loop
const colors = ["Red", "Green", "White", "Black"];

// const arrayToString = (arr, s) => {
//   let color = '';
//   let arrLength = arr.length-1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arrLength > i) {
//       color += arr[i] + `${s}`; 
//     } else {
//       color += arr[i]; 
//     }
//   }

//   return {color}
// }

// const {color} = arrayToString(colors, '+');
// console.log(color);

// Way 01 = join
const arrayToString = (arr, s) => {
  let color;
  color = arr.join(s);

  return {color}
}

const {color} = arrayToString(colors, '+');
console.log(color);