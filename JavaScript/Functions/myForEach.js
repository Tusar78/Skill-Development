var cars = ["Volvo", "BMW", "Audi", "Chevrolet"];

// // Array travers as a normal way
// for (let i = 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// // Array travers using forOf
// for (const car of cars) {
//     console.log(car);
// }

// Array travers usinf forEach
cars.forEach((val, i, arr) => {
  console.log(val, i, arr);
});

// Lets Implement to myForeach
function myForeach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

myForeach(cars, (val, i, arr) => {
    console.log(val, i, arr);
})


const nums = [2, 4, 6, 8];
let sum = 1;

myForeach(nums, (val) => {
    sum *= val;
})

console.log(sum);