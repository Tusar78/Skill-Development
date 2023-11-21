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

function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Player(name, age, type, country) {
  Person.call(this);
  this.name = name;
  this.age = age;
  this.type = type;
  this.country = country;
}

Person.prototype = {
  eat() {
    console.log(`${name} can eat.`);
  },
  sleep() {
    console.log(`${name} can sleep`);
  }
}

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player

const Sakib = new Player('Sakib', 37, 'All rounder', 'BD');
console.log(Sakib);