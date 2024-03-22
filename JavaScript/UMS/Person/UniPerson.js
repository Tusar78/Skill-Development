const Person = require("./Person");

const _department = Symbol("department");
const _account = Symbol("account");

class UniPerson extends Person {
  constructor(id, name) {
    super(id, name);
    this[_department] = null;
    this[_account] = null;
  }

  // Set and Get department
  set department(value) {
    this[_department] = value;
  }
  get department() {
    return this[_department];
  }

  // Set & Get Blood
  set account(value) {
    this[_account] = value;
  }
  get account() {
    return this[_account];
  }

  toString() {
    return `${super.toString()}, ${this[_account]}, ${this[_department]}`;
  }
}

module.exports = UniPerson;
