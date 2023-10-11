const people = new Set();
people.add("Tusar");
people.add("Rakib");
people.add("Salman");
people.add("Rakib")

const letter = new Set(['T', 'U', 'S', 'A', 'R']);
let word = '';
people.forEach(element => {
  word += element + ' ';
});

console.log(people.values());

const students = ['Jannat', 'Aopo', 'Shafin'];
console.log(students);