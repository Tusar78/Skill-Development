// First class function maintain some critiria


// 1. A function can be stored in a variable
function person() {
    return {
        name: 'tusar'
    }
}

const tus = person();
console.log(tus);

// 2. A Function can be stored in a Array
function bol() {
    return true
}

const randomData = [10, 2, 'Rakib', bol()];
console.log(randomData);

// 3. A Function can be stored in a object
const person2 = {
    name: 'Aopo',
    age: 23,
    email: 'aopo@gmail.com',
    get: function () {
        return `Name: ${this.name} and email: ${this.email}`
    }
}
console.log(person2.get());

// 4. We can create function as need
for (let i = 0; i < 5; i++) {
    setTimeout(() => {
        console.log('Tusar');
    }, 1000);
}

// 5. We can pass Function as an argument
function myFunc(val) {
    console.log(val ** 2);
}

function such(val, calB) {
    calB(val)
}

such(10, myFunc)
// 6. We can return Funtion From Another Function
function func1() {
    return 'Hello';
}

function func2() {
    return func1;
}

console.log(func2()());