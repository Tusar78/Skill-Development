/** This Keyword Rule
 * 1. Implicit Binding
 * 2. Explicit Binding
 * 3. New Keyword Rule
 * 4. Window Rule
 */

// const person = {
//   name: 'tusar',
//   age: 24,
//   dispFunc: function () {
//     console.log(`${this.name}, How are you?`);
//   }
// }

// const objWrap = function(obj) {
//   obj.displayName = function () {
//     console.log(`${this.name}, How are you?`);
//   }
// }

// const sakib = {
//   name: 'Sakib',
//   age: 35
// }

// const tamim = {
//   name: 'Tamim',
//   age: 37,
// }
// // person.dispFunc();

// objWrap(sakib);
// objWrap(tamim);
// sakib.displayName();
// tamim.displayName();


// const myFunc = function (n1, n2) {
//   console.log(this.name, n1, n2);
// }

// const sakib = {
//   name : 'Sakib',
//   age : 37,
// }

// const arr = ['Tusar', 'Rakib']
// // myFunc.apply(sakib, arr);
// const m = myFunc.bind(sakib, ...arr);
// m();


// function Person(name, age) {
//   console.log(this.name);
// }

// const Sakib = {
//   nameE: 'Sakib'
// }

// Person();

/** This  keyword Rule
 * Implicit Binding
 * Explicit Binding
 * new binding
 * window binding
 */

//  1. Implicit Binding
let name = 'Rakib';
const person = {
  name: 'Tusar',
  age: 24,
  showName: function () {
    console.log(this.name);
  }
}

person.showName();

function printNameFunction(obj) {
  obj.printName = function() {
    console.log(this.name);
  }
}

const sharif = {
  name: 'Sharif',
  age: 28
}

const rakib = {
  name: 'Rakib',
  age: 31
}

printNameFunction(sharif);
printNameFunction(rakib);

sharif.printName();
rakib.printName();