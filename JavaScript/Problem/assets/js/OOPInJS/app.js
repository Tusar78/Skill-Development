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

class Person {
    constructor(name, email) {
        this._name = name;
        this._email = email;
    }

    setName(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    sendMsg(msg) {
        console.log(`To ${this._email}`);
        console.log(`Hello ${this._sanitizeMsg(msg)}`);
    }

    _sanitizeMsg(msg) {
        return msg.trim().toLowerCase();
    }
}

const p1 = new Person("Tusar", "tusar@gmail.com");
const p2 = new Person("Rakib", "rakib@gmail.com");

p2.sendMsg("        Wow! Your looking so cool.   ");