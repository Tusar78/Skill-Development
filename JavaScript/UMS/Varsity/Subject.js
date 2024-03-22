const _id = Symbol("id");
const _name = Symbol("name");
const _creadit = Symbol("creadit");

class Subject {
  constructor({ id, name, creadit }) {
    this[_id] = id;
    this[_name] = name || "";
    this[_creadit] = creadit || "";
  }

  // Set and Get name
  set name(value) {
    this[_name] = value;
  }
  get name() {
    return this[_name];
  }

  // Set and Get creadit
  set creadit(value) {
    this[_creadit] = value;
  }
  get creadit() {
    return this[_creadit];
  }

  toString() {
    return `
            ${this[_id]},
            ${this[_name]},
            ${this[_creadit]}
        `;
  }
}

module.exports = Subject;
