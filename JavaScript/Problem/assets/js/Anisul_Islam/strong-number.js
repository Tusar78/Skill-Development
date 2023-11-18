// Write a program to check a number strong or not

/*
  What is strong number with example?
  A strong number is a number where the sum of the factorials of its digits equals the original number. 1, 2, 145, and 40585 are some examples of Strong numbers.
*/

let num = +prompt("Enter the number: ");

const getStrongNumber = num => {
  let temp = num;
  let arr = [];
  let result;

  while (temp != 0) {
    result = temp % 10;
    arr.push(result);
    temp = Math.trunc(temp / 10);
  }

  return arr;
}

let getArr = getStrongNumber(num);

let sum = 0;
for (let i = 0; i < getArr.length; i++) {
  let fact = 1;
  for (let j = 1; j <= getArr[i]; j++) {
     fact *= j; 
  }
  sum += fact;
}

sum == num ? console.log(`This is strong number.`) : console.log(`This is not strong number`);