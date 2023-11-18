const arr = [
  {id: 1, name: 'Tusar'},
  {id: 2, name: 'Rakib'},
  {id: 3, name: 'Rubi'},
  {id: 4, name: 'Aopo'},
  {id: 5, name: 'Salman'}
]

const k = 3;

for (let i = 0; i < arr.length; i++) {
    if (arr[i].id == k) {
      arr[i].name = 'Rubaiya';
      break;
    }
}

console.log(arr);