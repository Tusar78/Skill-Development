// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// Brut force idea

// let num = '025468';

// let insertDash = '';
// for (let i = 0; i < num.length; i++) {
//   if (num[i] % 2 == 0 && num[i+1] % 2 == 0) {
//     insertDash += num[i];
//     if (num[i+1] % 2 == 0) {
//       insertDash += '-';
//     }
//   } else {
//     insertDash += num[i];
//   }
// }

// console.log(insertDash);

// Precise Version
let num = prompt("Enter any numbers: ");

const insertDashBEN = n => {
  let insertDashNum = '';

  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 == 0 && n[i+1] % 2 == 0) {
      insertDashNum += n[i];
      
      if (n[i+1] % 2 == 0) {
        insertDashNum += '-';
      }
    } else {
      insertDashNum += n[i];
    }
  }

  return {insertDashNum};
}

const {insertDashNum} = insertDashBEN(num);
console.log(insertDashNum);