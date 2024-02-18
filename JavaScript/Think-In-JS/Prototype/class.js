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

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   eat() {
//     console.log(`${this.name} can eat!`);
//   }
//   sleep() {
//     console.log(`${this.name} can sleep!`);
//   }
// }

// class Player extends Person{
//   constructor(name, age, type, country) {
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.type = type;
//     this.country = country;
//   }

//   play() {
//     console.log(`${this.name} can play!`);
//   }
// }

// const Sakib = new Player('Sakib', 37, "All rounder", 'BD');
// console.log(Sakib);

// Getter and setter
// class Mobile {
//   constructor(camera, ram) {
//     this.camera = camera;
//     this.ram = ram;
//   }

//   call() {
//     console.log(`${this.name} can have call`);
//   }
// }

// class Phone extends Mobile {
//   constructor(name, touch, camera, ram) {
//     super(camera, ram);
//     this.camera = camera;
//     this.ram = ram;
//     this.name = name;
//     this.touch = touch;
//   }

//   video() {
//     console.log(`${this.name} can have 1080px video!`);
//   }

//   get getFunc() {
//     console.log("Hello World");
//   }

//   set setFunc(name) {
//     this.name = name;
//   }
//   // This method denote to this class not this constructor
//   // static call() {
//   //   console.log(`${this.name} can have calling feature!`);
//   // }
//   call() {
//     super.call();
//     console.log(`${this.name} can have calling feature!`);
//   }
// }

// const samsung = new Phone("Samsung", "Gorilla", "12mp", "8gb");
// // console.log(Samsung.call());

// // Phone.call()

// samsung.getFunc;
// samsung.setFunc = "Hello";
// console.log(samsung.name);




// Object.prototype.greet = function() {
//     alert('Hello Tusar');
// }

// const f = function Person() {
  
// }

// let myObj = {}

// console.dirc(f);

// Prototypical Inheritance 
function Mobile(camera, call) {
  this.camera = camera;
  this.call = call;
}

Mobile.prototype = {
  video: function() {
    console.log('Mobile have video feture');
  }
}

function Samsung(camera, call, displayType, proccesorType) {
  Mobile.call(this);
  this.camera = camera;
  this.call = call;
  this.displayType = displayType;
  this.proccesorType = proccesorType;
}

Samsung.prototype = Object.create(Mobile.prototype);
Samsung.prototype.constructor = Samsung;
Samsung.prototype.zoom = function() {
    console.log('This mobile can zoom 100x');
}

const samsung = new Samsung('yes', 'yes', 'Gorilla', 'exenose');
console.log(samsung);
samsung.zoom();
