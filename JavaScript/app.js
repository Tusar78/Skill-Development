// "use strict"

// const outer = 'Out';

// function myFunc() {
//   const inner = 'Inner';
//   console.log(outer, inner);
// }

// myFunc();
// console.log(outer, inner);

// if (true) {
//   var varVariable = "This is var";
// }

// console.log(varVariable);

// if (true) {
//   let letVariable = "This is let";
//   console.log(letVariable);
//   letVariable = "";
//   console.log(letVariable);
//   console.log(varVariable);
// }

// console.log(letVariable);

// var tester = "Say hi";

// function myFunc() {
//   var hello = "Hello World";
// }

// console.log(hello);

// console.log(hello);
// var hello = 'Rakib';

// let greeting = "say Hi";
// let times = 4;

// if (times > 3) {
//   let hello = "Say Hello Instead";
//   console.log(hello);
// }

// console.log(hello);

// for (let i = 0; i < 10; i++) {
//   console.log(i);
// }

// console.log(i);

function sayHiBye(fName, lName) {
  function fullName() {
    return fName + " " + lName;
  }

  alert("Hello " + fullName());
  alert("Hi " + fullName());
}

sayHiBye("Rakibul", "Islam");
sayHiBye("Tusar", "Ali");