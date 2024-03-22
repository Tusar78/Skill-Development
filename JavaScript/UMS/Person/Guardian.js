const Person = require("./Person");

const _profession = Symbol("profession");
const _income = Symbol("income");

class Guardian extends Person {
  constructor(id, name, profession, income) {
    super(id, name);
    this[_profession] = profession;
    this[_income] = income;
  }

  // Set and Get profession
  set profession(value) {
    this[_profession] = value;
  }
  get profession() {
    return this[_profession];
  }

  // Set & Get income
  set income(value) {
    this[_income] = value;
  }
  get income() {
    return this[_income];
  }

  toString() {
    return `${super.toString()}, ${this[_profession]}, ${this[_income]}`;
  }
}

module.exports = Guardian;
