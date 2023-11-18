// Write a program to check a letter small or capital 

let ch = prompt("Write a letter: ");

const isCapital = letter => {
  let result;

  if (letter >= 'A' && letter <= 'Z') {
    result = 'Capital';
  } else if (letter >= 'a' && letter <= 'z') {
    result = 'Small';
  } else {
    console.log('%cYou write a invalid stuff!', 'color: red');
  }

  return result;
}

const result  =isCapital(ch);
console.log(`%c${result}`, 'background-color: green');