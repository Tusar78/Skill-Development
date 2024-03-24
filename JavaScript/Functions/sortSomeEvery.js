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

const nums = [4, 6, 7, 9, 54, 7, 6, 37];

// Apply Sort method
data.sort((a, b) => {
    return b.age - a.age;
});
console.log(data);

nums.sort((a, b) => {
    return b - a;
});
console.log(nums);


const n1 = [2, 2, 3, 2]
// Implement Some Method 
function myEvery(arr, cb) {
    let newVal = 0;
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            newVal += 1;
        }
    }

    if (newVal === arr.length) {
        return newVal = true;
    } else {
        return newVal = false;
    }
}

const isPositive = myEvery(nums, (val) => {
    return val > 0;
})

console.log(isPositive);