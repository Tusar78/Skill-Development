const _id = Symbol('id');
const _name = Symbol('name');
const _blood = Symbol('blood')
const _contact = Symbol('contact');

class Person {
    constructor(id, name) {
        this[_id] = id;
        this[_name] = name;
        this[_blood] = null;
        this[_contact] = null;
    }

    // Set and Get name
    set name(value) {
        this[_name] = value;
    }
    get name() {
        return this[_name];
    }

    // Set & Get Blood
    set blood(value) {
        this[_blood] = value;
    }
    get blood() {
        return this[_blood];
    }

    // Set & Get Contact
    set contact(value) {
        this[_contact] = value;
    }
    get contact() {
        return this[_contact];
    }

    toString() {
        return `${this[_id]} - ${this[_name]}`;
    }
}

module.exports = Person;