/**
 * 2. Write a JavaScript program to delete the email property from the object. Also print the object before or after deleting the property.
 */


const person = {
    name: 'Tusar',
    email: 'tusar@gmail.com',
    age: 25
}

console.log(person);
delete person.email;
console.log(person);