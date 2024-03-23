let nums = [1, 2, 11, 4, 5];

// const sum = nums.reduce((prev, curr) => {
//     return prev + curr;
// }, 0)

// const max = nums.reduce((prev, curr) => {
//     return Math.max(prev, curr);
// })

// console.log(max);

// Create on my Reduce
function myReduce(arr, cb, acc) {
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i])
    }

    return acc;
}

const sum = myReduce(nums, (prev, val) => {
    return prev + val;
},0)

const max = myReduce(nums, (prev, val) => {
    return Math.min(prev, val);
}, nums[0])

console.log(max);