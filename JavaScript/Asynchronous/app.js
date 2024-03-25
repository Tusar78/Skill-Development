// function gretting(name) {
//     setTimeout(() => {
//         console.log(name);
//     }, 3000)
// }

// const output = gretting('Tusar');
// console.log(output);

// Handle ajax using callback function
// const xhr = new XMLHttpRequest();
// console.log(xhr);
// xhr.open('get', 'https://jsonplaceholder.typicode.com/users');
// xhr.onreadystatechange = function (e) {
//     if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//             console.log(xhr.response);
//         } else {
//             console.log(xhr.status);
//         }
//     }
// }

// xhr.send();
// console.log('Tusar');

function getRequest(url, cb) {
    const xhr = new XMLHttpRequest();
    xhr.open('get', url);

    xhr.onreadystatechange = function (e) {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                let response = JSON.parse(xhr.response);
                cb(null, response);
            } else {
                cb(xhr.status, null);
            }
        }
    }
    
    xhr.send();
}

getRequest('https://jsonplaceholder.typicode.com/users', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        res.forEach(element => {
          console.log(element.username);
        });
    }
})