// function gretting(name) {
//     setTimeout(() => {
//         console.log(name);
//     }, 3000)
// }

// const output = gretting('Tusar');
// console.log(output);

// Handle ajax using callback function
const xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
xhr.onreadystatechange = function (e) {
    if (xhr.readyState === 4) {
        if (xhr.status === 200) {
            console.log(xhr.response);
        } else {
            console.log(xhr.status);
        }
    }
}

xhr.send();
console.log('Tusar');