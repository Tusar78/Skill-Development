const UniPerson = require("./UniPerson");

const _studentID = Symbol("studentID");
const _guardian = Symbol("guardian");
const _exams = Symbol("exams");
const _fee = Symbol("fee");

class Student extends UniPerson {
  constructor(id, name, studentID, guardian) {
    super(id, name);
    this[_studentID] = studentID;
    this[_guardian] = guardian;
  }

  // Get Student id and Guardian
  get studentID() {
    return this[_studentID];
  }

  get guardian() {
    return this[_guardian];
  }

  // Set and Get exams
  set exams(value) {
    this[_exams] = value;
  }
  get exams() {
    return this[_exams];
  }

  // Create a method to add exam
  addExam(value) {
    this[_exams].push(value);
  }

  // Set & Get Fee
  set fee(value) {
    this[_fee] = value;
  }
  get fee() {
    return this[_fee];
  }

  toString() {
    return `${super.toString()}, ${this[_studentID]}`;
  }
}

module.exports = Student;
