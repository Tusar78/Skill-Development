// Basic Problem how to get squire

class Squire {
    constructor(newLength) {
        newLength >= 0 ? this.newLength = newLength : alert('Not allow non-negative value');
    }

    area() {
        return this.newLength * this.newLength;
    }
}

const squire = new Squire(5);
console.log(squire.area());