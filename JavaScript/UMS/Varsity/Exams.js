const _id = Symbol('id');
const _name = Symbol('name');
const _subject = Symbol('subject');
const _passmark = Symbol('passmark');
const _student = Symbol('adresss');

class Exams {
    constructor({id, name, subject, passmark, student}) {
        this[_id] = id;
        this[_name] = name || '';
        this[_subject] = subject || '';
        this[_passmark] = passmark || '';
        this[_student] = student || '';
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

    // Set and Get passmark
    set passmark(value) {
        this[_passmark] = value;
    }
    get passmark() {
        return this[_passmark];
    }

    // Set and Get student
    set student(value) {
        this[_student] = value;
    }
    get student() {
        return this[_student];
    }

    toString() {
        return `
            ${this[_id]},
            ${this[_name]},
            ${this[_subject]},
            ${this[_passmark]},
            ${this[_student]},
        `
    }
}

module.exports = Exams;