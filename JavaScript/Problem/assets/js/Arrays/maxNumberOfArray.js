// Write a program to find max number in an array

// const arr = [4, 7, 8, 10, 7, 5, 97, 14, 8];

// const maxNumber = arr => {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }

//   return {max}
// }

// let {maxVal} = maxNumber(arr);
// console.log(maxVal);

// Write a program to Sorting ascending order in an array

const arr = [4, 7, 8, 10, 7, 5, 97, 14, 8];

const maxNumber = arr => {
  let sort = [];
  let small = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (small < arr[i]) {
      sort.push(arr[i])
    }
  }

  return {sort}
}

let {sort} = maxNumber(arr);
console.log(sort);