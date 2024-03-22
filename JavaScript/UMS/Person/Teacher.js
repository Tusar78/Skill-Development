const Employe = require("./Employe");

const _subject = Symbol("subject");

class Teacher extends Employe {
  constructor(id, name, subject) {
    super(id, name);
    this[_subject] = subject;
  }

  // Get Student id and Guardian
  get subject() {
    return this[_subject];
  }

  toString() {
    return `${super.toString()}, ${this[_subject]}`;
  }
}

module.exports = Teacher;
