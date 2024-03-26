const BASE_URL = 'https://jsonplaceholder.typicode.com';

fetch(`${BASE_URL}/users`)
    .then(res => res.json())
    .then(data => console.log(data));