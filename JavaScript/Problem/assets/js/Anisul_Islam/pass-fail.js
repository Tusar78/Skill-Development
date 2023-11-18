// Write a program to check student pass or fail.

let stdMark = +prompt("Enter your mark");

const isPass = stdMark => {
  let result;
  if (stdMark >= 33) {
    result = 'Pass';
  } else {
    result = 'Fail';
  }

  return result;
}

const result = isPass(stdMark);
if (result == 'Pass') {
  console.log(`%cYou are ${result}`, 'background-color: green');
} else {
  console.log(`%cYou are ${result}`, 'color: red');
}