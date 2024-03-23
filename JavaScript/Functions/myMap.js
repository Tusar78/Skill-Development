const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Travarse and genereate new array using map method
const fruits2 = fruits.map((val, i, arr) => {
    return val + 0;
}) 

// Travarse Fruits on for lop
const fruits3 = [];
for (let i = 0; i < fruits.length; i++) {
    fruits3[i] = fruits[i] + 0;
}

console.log(`First Array: ${fruits}`); 
console.log(`Third Array: ${fruits3}`); 