"use strict"

var x;

function myFunc() {
  x = 10;
  console.log(x);
}

myFunc();
console.log(x);

//nested Function

function sayHi(firstName, lastName) {
  //Another function
  function greeting() {
    return firstName + ' ' + lastName;
  }

  console.log("Hello", greeting());
  console.log("Hi", greeting());
}

sayHi("Tusar", "Rakib")