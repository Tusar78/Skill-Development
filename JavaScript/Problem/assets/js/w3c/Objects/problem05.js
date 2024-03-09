/**
 05. Write a JavaScript program to get the volume of a v with four decimal places using object classes. Volume of a cylinder : V = πr2h
 */


class Cylindrical {
    constructor(r, h) {
        this.radius = r;
        this.height = h;
    }

    volume() {
        return this.height * Math.PI * this.radius * this.radius;
    }
}

const cylinder = new Cylindrical(2, 7);
console.log(cylinder.volume().toFixed(4));