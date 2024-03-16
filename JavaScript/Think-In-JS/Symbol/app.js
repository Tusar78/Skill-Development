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