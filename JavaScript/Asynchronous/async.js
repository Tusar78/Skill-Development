// function test() {
//     return Promise.resolve("Test");
// }

// console.log(test());

// async function test() {
//     return 'tusar'
// }
// console.log(test());

// const test = async() => {
//     return 'tusar';
// }

// console.log(test());

const BASE_URL = "https://jsonplaceholder.typicode.com";

const fetchData = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    const data = await res.json();
    console.log(data);
  } catch (e) {
    console.log(e.message);
  }
};

fetchData();

fetch(`${BASE_URL}/users`)
  .then((res) => res.json())
  .then((data) => getData(data))
  .catch((e) => {
    console.log(e);
  });

const getData = data => {
    data.forEach(element => {
        console.log(element.name);
    });
}