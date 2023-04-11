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

// function sayHiBye(fName, lName) {
//   function fullName() {
//     return fName + " " + lName;
//   }

//   alert("Hello " + fullName());
//   alert("Hi " + fullName());
// }

// sayHiBye("Rakibul", "Islam");
// sayHiBye("Tusar", "Ali");

// function makeCounter() {
//   let rndm = Math.ceil(Math.random() * 10);

//   return function () {
//     return rndm*Math.ceil(Math.random());
//   }
// }

// const result = makeCounter();

// console.log(result());
// console.log(result());
// console.log(result());

// (function () {
//   let num1 = 10;

//   var sum = function () {
//     let num2 = 20;
//     let num3 = 6;
//     return function () {
//       return num1;
//     };
//   };

//   var myFunc = sum();
//   console.dir(myFunc);
// })();

// var num1 = 10;
// var num2 = 20;

// var sum = function() {
//   return num1 + num2;
// }

// console.dir(sum);

// function stopWatch() {
//   let startTime = Date.now();

//   function getDelay() {
//     console.log(Date.now() - startTime);
//   }

//   return getDelay; 
// }

// let timer = stopWatch();

// for (let i = 0; i < 10000000; i++) {
//   const element = Math.random() * 1000000;
// }

// timer()

// timer = null;
// timer()
// console.dir(timer)


// let tus = 'Tusar';
// console.log(tus);
// tus = null;
// console.log(tus);

var a;

function async() {
  a = 20;

  var myFunc = function() {
    console.log(a);
  }

  setTimeout(myFunc, 3000);
  console.dir(myFunc);
}

async();

a = 30;