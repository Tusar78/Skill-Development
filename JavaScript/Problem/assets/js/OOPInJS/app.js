const person = {}
person.name = "Tusar";
person.email = "tusar@gmail.com";
console.log(person);

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const p = new Person("tusar", "tus@gmail.com");
const p1 = new Person();
console.log(p);
console.log(p1);