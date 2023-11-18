// Write a program to convert a number reverse

let num = +prompt("Enter your number: ");


const getReverse = num => {
  let temp = num;
  let reverse = '';
  let result;

  while (temp != 0) {
    result = temp % 10;
    reverse += result;
    temp = Math.trunc(temp / 10);
  }

  return reverse;
}

let reverse = getReverse(num);
console.log(`Previous Number is: ${num}`);
console.log(`After Reverse: ${reverse}`);