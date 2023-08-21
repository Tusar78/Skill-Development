// var x;

// function myFunc() {
//   x = 10;
//   console.log(x);
// }

// myFunc();
// console.log(x);

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

// var num1 = 10;
// var sum = function () {
//   var num2 = 20;

//   return function () {
//     return num1 + num2;
//   };
// };

// var myFunc = sum();
// console.log(myFunc);
// console.dir(myFunc);

// const myName = 'Tusar';

// function backAccount(initialBalance) {
//   const balance = initialBalance;
//   return function () {
//     return balance;
//   }
// }

// var account = backAccount(10000);
// console.log(account);
// console.dir(account);

// var num1 = 3;
// var num2 = 4;

// function sum() {
//   return num1 + num2;
// }

// console.log(sum());
// console.dir(sum);

// num1 = 10;
// num2 = 20;

// console.log(sum());
// console.dir(sum);

  // let num1 = 5;
  // let num2 = 10;

  // function sum() {
  //   return num1 + num2;
  // }

  // console.log(sum());
  // console.dir(sum);


// function stopWatch() {
//   var startTime = Date.now();

//   function delay() {
//     console.log(Date.now() - startTime);
//   }

//   return delay;
// }

// var timer = stopWatch();

// for (let i = 0; i < 100000000; i++){
//   var a = Math.random() * 100000000;
// };

// timer();
// timer = null; // Garbage Collection

// var a = 10;

// function async() {
//   function innerAsync() {
//     console.log(a);
//   }

//   setTimeout(innerAsync, 3000);
//   console.dir(innerAsync);
//   }

// async()

// a = 20

// for (let i = 0; i < 3; i++) {
//   function myFunc() {
//     console.log(i);
//   }
//   setInterval(myFunc, 3000);  
//   console.dir(myFunc);
// }

// {
//   let message = 'Hello';
//   alert(message);
// }

// let message = 'Goodbye';
// alert(message);

// if (true) {
//   let message = 'Awesome';
//   alert(message)
// }

// alert(message)

// for(var i = 0; i < 3; i++) {
//   console.log(i);
// }

// console.log(i);
