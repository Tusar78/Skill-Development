const UniPerson = require("./UniPerson");

const _employeID = Symbol("employeID");
const _salary = Symbol("salary");

class Employe extends UniPerson {
  constructor(id, name, employeID) {
    super(id, name);
    this[_employeID] = employeID;
    this[_salary] = null;
  }

  // Get employe id and salary
  get employeID() {
    return this[_employeID];
  }

  // Set and get salary
  set salary(value) {
    this[_salary] = value;
  }
  get salary() {
    return this[_salary];
  }

  toString() {
    return `${super.toString()}, ${this[_employeID]}`;
  }
}

module.exports = Employe;
