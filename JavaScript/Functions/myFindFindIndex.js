const nums = [4, 5, 7, 3, 8, 9, 11, 24];

// const findOne = nums.find((val) => {
//     return val != 5;
// })

// console.log(findOne);

// const numIndex = nums.findIndex(val => {
//     return val === 5;
// })

// console.log(numIndex);

// Let's make a find method
function myFind(arr, cb) {
    let newVal;
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            // newVal = arr[i];
            newVal = i;
        }
    }

    return newVal;
}

const findn = myFind(nums, val => {
    return val === 4;
})

console.log(findn);