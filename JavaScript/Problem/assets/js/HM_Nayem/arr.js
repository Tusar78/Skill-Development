const arr1 = ['apple', 'orange', 'garlik', 'water melon'];
console.log(arr1);

const arr2 = [];

let arrLength = arr1.length;
for (let i = 0; i < arrLength; i++) {
    console.log((arrLength-1)-i);
    arr2[i] = arr1.pop();
}
console.log(arr2);