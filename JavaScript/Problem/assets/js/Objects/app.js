const obj1 = {
    name: 'Tusar',
    email: 'tusar@gmail.com'
}

const obj2 = {
    name1: 'Rakib',
    email1: 'rakib@gmail.com'
}

// const obj3 = Object.assign(obj1, obj2);
// const obj3 = {...obj1, ...obj2}
const objKeys = Object.keys(obj1);
const objValues = Object.values(obj2);
const objEntries = Object.entries(obj1);
// console.log(objEntries);

for (let i = 0; i < objEntries.length; i++) {
    console.log(objEntries[i][i]);    
}