class Person {
  constructor(name, email) {
    this._name = name;
    this._email = email;
  }

  // Set & Get Name
  set name(value) {
    this._name = value;
  }
  get name() {
    return this._name;
  }

  // Set & Get Email
  set email(value) {
    this._email = value;
  }
  get email() {
    return this._email;
  }

  print() {
    console.log(`className = Person, ${this}`);
  }

  toString() {
    return `Name: ${this._name}\n Email: ${this._email}`;
  }

  static isValid(age) {
    return age >= 18;
  }

  static isEqual(p1, p2) {
    if (p1._name !== p2._name) return false;
    if (p1._email !== p2._email) return false;

    return false;
  }
}

module.exports = Person;