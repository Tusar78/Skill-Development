const _id = Symbol('id');
const _email = Symbol('email');
const _phone = Symbol('phone');
const _alternativePhone = Symbol('alternativePhone');
const _address = Symbol('adresss');

class Address {
    constructor({id, email, phone, alternativePhone, address}) {
        this[_id] = id;
        this[_email] = email || '';
        this[_phone] = phone || '';
        this[_alternativePhone] = alternativePhone || '';
        this[_address] = address || '';
    }

    // Set and Get Email
    set email(value) {
        this[_email] = value;
    }
    get email() {
        return this[_email];
    }

    // Set and Get phone
    set phone(value) {
        this[_phone] = value;
    }
    get phone() {
        return this[_phone];
    }

    // Set and Get alternativePhone
    set alternativePhone(value) {
        this[_alternativePhone] = value;
    }
    get alternativePhone() {
        return this[_alternativePhone];
    }

    // Set and Get address
    set address(value) {
        this[_address] = value;
    }
    get address() {
        return this[_address];
    }

    toString() {
        return `
            ${this[_id]},
            ${this[_email]},
            ${this[_phone]},
            ${this[_alternativePhone]},
            ${this[_address]},
        `
    }
}

module.exports = Address;