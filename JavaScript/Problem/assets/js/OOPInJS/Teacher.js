class Teacher {
    constructor(subject, salary) {
        this._subject = subject;
        this._salary = salary;
    }

    // Set Teacher properties
    set subject(value) {
        this._subject = value;
    }
    set salary(value) {
        this._salary = value;
    }
}

module.exports = Teacher;