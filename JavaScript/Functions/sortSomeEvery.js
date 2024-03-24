const data = [
    {
        name: "A",
        age: 24,
    },
    {
        name: "B",
        age: 78,
    },
    {
        name: "C",
        age: 54,
    },
    {
        name: "D",
        age: 4,
    },
    {
        name: "E",
        age: 17,
    }
]

const nums = [4, 6, 7, 9, 54, 7, 6, 37, -8, -2, 0, 8, 66];

// Apply Sort method
data.sort((a, b) => {
    return b.age - a.age;
});
console.log(data);

nums.sort((a, b) => {
    return b - a;
});
console.log(nums);

// Implement Some Method 
function mySome(arr, cb) {
    let newVal = false;
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newVal = true;
            break;
        }
    }

    return newVal;
}

const isSeven = mySome(nums, (val) => {
    return val === 77;
})

console.log(isSeven);