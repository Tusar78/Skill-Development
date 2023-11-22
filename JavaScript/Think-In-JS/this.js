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


const myFunc = function () {
  console.log(this.name);
}

const sakib = {
  name : 'Sakib',
  age : 37,
}

myFunc.call(sakib);
sakib.name