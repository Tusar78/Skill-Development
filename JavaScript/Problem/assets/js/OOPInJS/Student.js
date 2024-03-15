class Student {
    constructor(subjects, tutionFee) {
        this._subjects = subjects;
        this._tutionFee = tutionFee;
    }

    // Set the properties of Student class
    set subjects(values) {
        this._subjects = values;
    }
    set tutionFee(value) {
        this._tutionFee = value;
    }
}

module.exports = Student;
