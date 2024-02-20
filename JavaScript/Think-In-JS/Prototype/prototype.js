// const methodObj = {P
//   eat() {
//     console.log("I am eating");
//   },
//   play() {
//     console.log("I am playing");
//   },
// };

// const MakePerson = (name, age) => {
//   const Person = {};

//   Person.name = name;
//   Person.age = age;

//   Person.eat = methodObj.eat;
//   Person.play = methodObj.play;

//   return Person;
// };

// const Tusar = MakePerson("Tusar", 24);
// const Rakib = MakePerson("Rakib", 32);

// console.log(Tusar);
// console.log(Rakib);

// const Person = {
//   name: 'Rakib',
//   age: 24,
//   play: function () {
//     console.log('He played cricket well!');
//   }
// }

// console.log(Person);

// const Tusar = Object.create(Person);
// Tusar.name = 'Tusar';
// console.log(Tusar);

// const PersonMethod = (name) => {
//   console.log(name);
//   const person = {
//     name: name,
//     sleep: function() {
//       console.log(`${name} can sleeping!`)
//     }
//   };

//   person.eat = function (name) {
//     console.log(`${name} can eating!`)
//   };

//   return person;
// };

// const Person = (name, age) => {
//   const person = Object.create(PersonMethod(name));
//   person.name = name;
//   person.age = age;

//   return person;
// };

// console.dir(Person);

// const Tusar = Person("Tusar", 24);
// const Rakib = Person("Rakib", 31);
// console.log(Tusar);

// function Person(name, age) {
//   let person = Object.create(Person.prototype);
//   person.name = name;
//   person.age = age;

//   return person;
// }

// Person.prototype = {
//   eat() {
//     console.log('I am eating!');
//   },
//   sleep() {
//     console.log('I am sleeping!');
//   }
// }

// const Tusar = Person('Tusar', 24);
// console.log(Tusar);

// function Person(name, age) {
//   // let this = person.create(Person.prototype);

//   this.name = name;
//   this.age = age;

//   // return this;
// }

// Person.prototype = {
//   eat() {
//     console.log('I am eating!');
//   },
//   sleep() {
//     console.log('I am Sleeping!');
//   }
// }

// const Tusar = new Person('Tusar', 24);
// console.log(Tusar);

// class Person {
//   constructor(name, age) {
//     this.name = name,
//     this.age = age
//   }

//   eat() {
//     console.log('I am eating');
//   }

//   sleep() {
//     console.log('I am sleeping!');
//   }
// }

// const Tusar = new Person('Tusar', 24);
// console.log(Person.prototype);

// const myArray = new Array();
// myArray.push("Tusar");

// // console.log(Array.prototype);

// Tusar.eat();

// class Person {
//   constructor(name, age) {
//     this.name = name,
//     this.age = age
//   }

//   sleep() {
//     console.log(`${this.name} sleeping!`);
//   }
// }

// const Tusar = new Person("Tusar", 24);
// console.log(Tusar.sleep());

// function Person(name, age) {
//   const person = Object.create(Person.prototype);

//   person.name = name;
//   person.age = age;

//   return person;
// }

// Person.prototype = {
//   sleep() {
//     console.log(`${this.name} sleeping!`);
//   },
// };

// const Tusar = new Person("Tusar", 24);
// Tusar.sleep();

// const personMethod = {
//   eat: function () {
//     console.log("Person can eating!");
//   },
//   sleep: function () {
//     console.log("Person can sleeping!");
//   },
// };

// function Person(name, age) {
//   const person = Object.create(personMethod);

//   person.name = name;
//   person.age = age;

//   return person;
// }

// const tusar = Person('Tusar', 23);
// tusar.eat()

// Object Instance
// function Person(name, age) {
//   const person = Object.create(Person.prototype)

//   person.name = name;
//   person.age = age;

//   return person;
// }

// Person.prototype = {
//   eat(name) {
//     console.log(`${name} can eat`);
//   },
//   sleep() {
//     console.log('Person Can Sleep');
//   }
// }

// const tusar = Person("Tusar", 24);
// tusar.eat('Tusar');

// Deeply Prototype
// let animal = {
//     eats: true
// }

// let rabbit = {
//     jumps: true
// }
// rabbit.__proto__ = animal;
// console.log(rabbit.eats);
// console.dir(rabbit);

// Awesome Getter And Setter
let user = {
  name: "Tusar",
  sureName: "Ali",

  set fullName(value) {
    [this.name, this.sureName] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.sureName}`;
  },
};

let admin = {
  __proto__: user,
  admin: true,
};

alert(admin.fullName);

admin.fullName = 'Rakibul Islam';
alert(admin.fullName);