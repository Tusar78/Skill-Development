const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Travarse and genereate new array using map method
const fruits2 = fruits.map((val, i, arr) => {
    return val;
}) 

// Travarse Fruits on for lop
const fruits3 = [];
for (let i = 0; i < fruits.length; i++) {
    fruits3[i] = fruits[i] + 0;
}

console.log(`First Array: ${fruits}`); 
console.log(`Third Array: ${fruits3}`); 

// Let's make a my map
function myMap(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray[i] = cb(arr[i], i, arr);
    }

    return newArray;
}

const myFruits = myMap(fruits, (val, i, arr) => {
    return val + (i+1);
})

console.log(myFruits);