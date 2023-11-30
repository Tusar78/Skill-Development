// Write a program to sum a program which given

// let num = +prompt("Enter the number: ");
let num = 153;

// const getSum = num => {
//   let temp = num;
//   let sum = 0;
//   let sum2 =[];
//   let r;

//   while (temp != 0) {
//     r = temp % 10;
//     sum += r;
//     sum2.unshift(r);
//     temp = Math.trunc(temp / 10);
//   }

//   return [sum, sum2];
// }

// let [sum, sum2] = getSum(num);

// let pr = '';
// for (const s of sum2) {
//   pr += s + ' + ';
// }

// // console.log(pr.slice(0, -2));

// let presentation = '';
// for (let i = 0; i < pr.length-2; i++) {
//     presentation += pr[i];
// }
// console.log(presentation);
// console.log(sum);

const subDigit = num => {
  let temp = num;
  let sum = 0;
  let present = [];
  let result;

  while (temp != 0) {
    result = temp % 10;
    sum += result;
    present.unshift(result);
    temp = Math.trunc(temp / 10);
  }
  
  return {present, sum};
}

const {present, sum} = subDigit(num);
let result = '';
if (present.length) {
  for (let i = 0; i < present.length; i++) {
    if (i == present.length-1) {
      result += present[i];
    } else {
      result += present[i] + ' + ';
    }
  }
}

console.log(result);