const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 5000, 'One');
})

console.log(p1);

const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Two');
})

console.log(p2);

p1.then(e => {
    console.log(e);
}).catch(e => {
    console.log(e);
})

p2.then(e => {
    console.log(e);
})