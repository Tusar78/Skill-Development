// Write a program to check Year is leapyear or not

let year = +prompt("Enter year: ");

const isLeapYear = y => {
  let result;
  if (y % 400 == 0) {
    result = `${y} is Leap Year`;
  } else if (y % 4 == 0 && y % 100 != 0) {
    result = `${y} is Leap Year`;
  } else {
    result = `${y} is not Leap Year`;
  }

  return result;
}

const result = isLeapYear(year);
console.log(result);