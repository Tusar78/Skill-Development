const person = {}
person.name = "Tusar";
person.email = "tusar@gmail.com";
// console.log(person);

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    nameChange(name) {
        this.name = name;
    }

    sendMsg(msg) {
        console.log(`${msg} ${this.name}`);
        console.log(`send to ${this.email}`);
    }
}

const p1 = new Person("tusar", "tus@gmail.com");
const p2 = new Person("Rakib", "rakib@gmail.com");

p2.sendMsg("Hello");