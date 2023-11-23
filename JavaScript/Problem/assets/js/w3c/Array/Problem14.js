// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

const arr = [1, 2, 3, 5, 2, 3, 7, 9, 1];
console.log(arr);

const newArray = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = i+1; j < arr.length; j++) {
    if (arr[i] == arr[j]) {
      arr.splice(j, 1)
    }
  }  
}

console.log(arr);
