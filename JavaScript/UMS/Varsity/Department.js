const _id = Symbol('id');
const _name = Symbol('name');
const _subject = Symbol('subject');
const _dean = Symbol('dean');
const _teacher = Symbol('adresss');

class Department {
    constructor({id, name, subject, dean, teacher}) {
        this[_id] = id;
        this[_name] = name || '';
        this[_subject] = subject || '';
        this[_dean] = dean || '';
        this[_teacher] = teacher || '';
    }

    // Set and Get name
    set name(value) {
        this[_name] = value;
    }
    get name() {
        return this[_name];
    }

    // Set and Get subject
    set subject(value) {
        this[_subject] = value;
    }
    get subject() {
        return this[_subject];
    }

    // Set and Get dean
    set dean(value) {
        this[_dean] = value;
    }
    get dean() {
        return this[_dean];
    }

    // Set and Get teacher
    set teacher(value) {
        this[_teacher] = value;
    }
    get teacher() {
        return this[_teacher];
    }

    toString() {
        return `
            ${this[_id]},
            ${this[_name]},
            ${this[_subject]},
            ${this[_dean]},
            ${this[_teacher]},
        `
    }
}

module.exports = Department;