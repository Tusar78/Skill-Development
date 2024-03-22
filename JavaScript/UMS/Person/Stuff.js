const Employe = require("./Employe");

const _title = Symbol("title");

class Stuff extends Employe {
  constructor(id, name, title) {
    super(id, name);
    this[_title] = title;
  }

  // Get Student id and Guardian
  get title() {
    return this[_title];
  }

  toString() {
    return `${super.toString()}, ${this[_title]}`;
  }
}

module.exports = Stuff;
