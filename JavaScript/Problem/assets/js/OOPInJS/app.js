const person = {}
person.name = "Tusar";
person.email = "tusar@gmail.com";
// console.log(person);

// class Person {
//     constructor(name, email) {
//         this.name = name;
//         this.email = email;
//     }

//     nameChange(name) {
//         this.name = name;
//     }

//     sendMsg(msg) {
//         console.log(`${msg} ${this.name}`);
//         console.log(`send to ${this.email}`);
//     }
// }

// const p1 = new Person("tusar", "tus@gmail.com");
// const p2 = new Person("Rakib", "rakib@gmail.com");

// p2.sendMsg("Hello");

// class Person {
//     constructor(name, email) {
//         this._name = name;
//         this._email = email;
//     }

//     setName(name) {
//         this._name = name;
//     }

//     getName() {
//         return this._name;
//     }

//     print() {
//         console.log(this);
//     }
// }

// const p1 = new Person("Tusar", "tusar@gmail.com");
// const p2 = new Person("Rakib", "rakib@gmail.com");

// console.log(p1.getName());
// p1.setName("Tusar Ali");
// console.log(p1.getName());
// p1.print();

// class Person {
//     constructor(name, email) {
//         this._name = name;
//         this._email = email;
//     }

//     setName(name) {
//         this._name = name;
//     }

//     getName() {
//         return this._name;
//     }

//     sendMsg(msg) {
//         console.log(`To ${this._email}`);
//         console.log(`Hello ${this._sanitizeMsg(msg)}`);
//     }

//     _sanitizeMsg(msg) {
//         return msg.trim().toLowerCase();
//     }
// }

// const p1 = new Person("Tusar", "tusar@gmail.com");
// const p2 = new Person("Rakib", "rakib@gmail.com");

// p2.sendMsg("        Wow! Your looking so cool.   ");

// Getter and Setter
// class Person {
//     constructor(name, email) {
//         this._name = name;
//         this._email = email;
//     }

//     get name() {
//         return this._name;
//     }

//     set name(value) {
//         if (value === 'Tus') {
//             return
//         } else {
//             this._name = value;
//         }
//     }
// }

// const p1 = new Person('Tusar', 'tusar@gmail.com');
// const p2 = new Person('Rakib', 'rakib@gmail.com');

// console.log(p2.name);
// p2.name = 'Tus';

// console.log(p2.name);

class Person {
    static className = 'Person';
    static PI = 3.14159;

    constructor(name, email) {
        this._name = name;
        this._email = email;
    }

    print() {
        console.log(this + '');
    }

    toString() {
        return `Name: ${this._name}, Email: ${this._email}`
    }

    static isValid(age) {
        return age >= 18;
    }
}

const p1 = new Person('Tusar', 'tusar@gmail.com');
const p2 = new Person('Rakib', 'rakib@gmail.com');

const testObj = {
    name: 'Aopo',
    email: 'aopo@gmail.com',
    age: 15
}

let p3 = null;
if (Person.isValid(testObj.age)) {
    p3 = new Person(testObj.name, testObj.email);
}

console.log(p3);