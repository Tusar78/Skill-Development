const x = [5,7,8,9,10];
const k = +prompt("Enter Value Which you search");

const linearSearch = (arr, elem) => {
  const n = arr.length;
  let found = -1;
  for (let i = 0; i < n; i++) {
    if (arr[i] == elem) {
      found = i;
      break;
    } else {
      console.log("Hello");
    }
  }

  return found;
}

const result = linearSearch(x, k);

result == -1 ? console.log("Data is not found") : console.log(`Number position is ${result}`);