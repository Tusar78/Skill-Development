// Write a program to check a number is armstrong or not.

let num = +prompt("Enter the armstrong number: ");

const getArmStrong = num => {
  let temp = num;
  let sum = 0;
  let result;
  let flag;

  while (temp != 0) {
    result = temp % 10;
    sum = sum + (result ** 3);
    temp = Math.trunc(temp / 10);
  }

  num == sum ? flag = 1 : flag = 0;
  return flag;
}

let armStrong = getArmStrong(num);

armStrong ? console.log(`This number is armstrong.`) : console.log(`This number is not armstrong.`);