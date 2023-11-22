// function person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this.name);
// }

// const Tusar = new person("Tusar", 24)
// console.log(Tusar);
// const Rakib = new person("Rakib", 31)
// console.dir(Rakib);

// const f = function Person() {};
// console.dir(f);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// function Player(name, age, type, country) {
//   Person.call(this);
//   this.name = name;
//   this.age = age;
//   this.type = type;
//   this.country = country;
// }
// Person.prototype = {
//   eat() {
//     console.log(`${this.name} can eating!`);
//   },
//   sleep() {
//     console.log(`${this.name} can sleeping!`);
//   },
// };

// Player.prototype = Object.create(Person.prototype);
// Player.prototype.constructor = Player;

// Player.prototype.play = function () {
//   console.log(`${this.name} can playing!`);
// };

// const Sakib = new Player("Sakib", 24, "All Rounder", "BD");
// console.log(Sakib.eat());

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`${this.name} can eat!`);
  }
  sleep() {
    console.log(`${this.name} can sleep!`);
  }
}

class Player extends Person{
  constructor(name, age, type, country) {
    super(name, age);
    this.name = name;
    this.age = age;
    this.type = type;
    this.country = country;
  }

  play() {
    console.log(`${this.name} can play!`);
  }
}

const Sakib = new Player('Sakib', 37, "All rounder", 'BD');
console.log(Sakib);