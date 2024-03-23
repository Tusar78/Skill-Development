let nums = [2, 7, 8, 9, 54, 7, 4, 63];

// // Filter array using fillter method
// const even = nums.filter((val) => {
//     return val % 2 == 0;
// })

// // Create filter using for loop
// let newArr = [];
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//         newArr.push(nums[i]);
//     }
// }

// console.log(newArr);

// Create myFilter
function myFilter(arr, cb) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArray.push(arr[i])
        }
    }

    return newArray;
}

const odd = myFilter(nums, (val, i, arr) => {
    return val < 15;
})
console.log(odd);