const _id = Symbol('id');
const _roadNo = Symbol('roadNo');
const _city = Symbol('city');
const _region = Symbol('region');
const _country = Symbol('adresss');
const _postalCode = Symbol('postalCode');

class Contact {
    constructor({id, roadNo, city, region, country, postalCode}) {
        this[_id] = id;
        this[_roadNo] = roadNo || '';
        this[_city] = city || '';
        this[_region] = region || '';
        this[_country] = country || '';
        this[_postalCode] = postalCode || '';
    }

    // Set and Get roadNo
    set roadNo(value) {
        this[_roadNo] = value;
    }
    get roadNo() {
        return this[_roadNo];
    }

    // Set and Get city
    set city(value) {
        this[_city] = value;
    }
    get city() {
        return this[_city];
    }

    // Set and Get region
    set region(value) {
        this[_region] = value;
    }
    get region() {
        return this[_region];
    }

    // Set and Get country
    set country(value) {
        this[_country] = value;
    }
    get country() {
        return this[_country];
    }

    // Set and Get Postal Code
    set postalCode(value) {
        this[_postalCode] = value;
    }
    get postalCode() {
        return this[_postalCode];
    }

    toString() {
        return `
            ${this[_id]},
            ${this[_roadNo]},
            ${this[_city]},
            ${this[_region]},
            ${this[_country]},
            ${this[_postalCode]},
        `
    }
}

module.exports = Contact;