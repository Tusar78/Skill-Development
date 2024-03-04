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
console.log(objKeys);

// for (let i = 0; i < objKeys.length; i++) {
//     console.log(obj1[objKeys[i]]);    
// }