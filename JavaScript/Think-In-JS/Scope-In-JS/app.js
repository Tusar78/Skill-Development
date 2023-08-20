
var x;

function myFunc() {
  x = 10;
  console.log(x);
}

myFunc();
console.log(x);

//nested Function

/*
function sayHi(firstName, lastName) {
  //Another function
  function greeting() {
    return firstName + ' ' + lastName;
  }

  console.log("Hello", greeting());
  console.log("Hi", greeting());
}

sayHi("Tusar", "Rakib")
*/

// if (true) {
//   var vr1 = 'I am var';
// }

// console.log(vr1);

// if (true) {
//   let var2 = 'I am let';
// }

// console.log(var2);

// function myFun() {
//   var a = 5;
// }

// console.log(a);

// myFun();

const num1 = 10;
const num2 = 20;
const sum = function () {
  return num1 + num2;
}

console.log(sum);