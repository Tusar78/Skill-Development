// Write a program to calculate letter grade

let stdMark = +prompt("Enter your mark: ");

const gradeCalculator = stdMark => {
  let result;
  if (stdMark > 100 || stdMark < 0) {
    result = 'Invalid Number';
  } else if(stdMark <= 100 && stdMark > 79) {
    result = 'You Got A+';
  } else if(stdMark < 80 && stdMark > 69) {
    result = 'You Got A';
  }  else if(stdMark < 70 && stdMark > 59) {
    result = 'You Got A-';
  }  else if(stdMark < 60 && stdMark > 49) {
    result = 'You Got B';
  }  else if(stdMark < 50 && stdMark > 39) {
    result = 'You Got C';
  }  else if(stdMark <= 39 && stdMark >= 33 ) {
    result = 'You Got D';
  } else {
    result = 'You fail';
  }

  return result;
}

const result = gradeCalculator(stdMark);
console.log(result);