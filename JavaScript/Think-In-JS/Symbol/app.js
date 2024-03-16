const symbol1 = Symbol.for('Tusar');
const symbol2 = Symbol.for('Tusar');
console.log(symbol1===symbol2);
console.log(symbol1);
console.log(symbol2);

const name = Symbol('name');
const person = {
	[name]: 'Tusar',
	email: 'tusar@gmail.com'
}

console.log(person);

const person2 = {
	name: 'Tuar',
	email: 'tusar@gmail.com'
}
person2[Symbol("password")] = 'secret'
for (const key in person2) {
	console.log(key);
}

console.log(Object.keys(person2));

console.log(Array.prototype);

const myArray = [1, 2, 3];
const myStr = 'Tusar';
console.log(myArray.includes(1));
console.log(myStr.includes('u'));