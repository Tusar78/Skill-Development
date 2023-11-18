// Random Number Generator between Minimum to Maximum

// Get Number from user
let min = prompt("Enter Minimum Number: ");
let max = prompt("Enter Maximum Number: ");

const randomInteger = (min, max) => {
  min = Number.parseFloat(min);
  max = Number.parseFloat(max);
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

if (min == null || max == null) {
  alert("Please enter the number");
} else if (isNaN(min) || isNaN(max)) {
  alert("Please enter valid number");
} else {
  let result = randomInteger(min, max);
  console.log(result);
}
