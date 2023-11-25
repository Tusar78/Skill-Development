/*
  15. We have the following arrays :
  color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
  o = ["th","st","nd","rd"]
  Write a JavaScript program to display the colors in the following way :
  "1st choice is Blue ."
  "2nd choice is Green."
  "3rd choice is Red."
  - - - - - - - - - - - - -
  Note : Use ordinal numbers to tell their position.
*/


const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

const Ordinal = n => {
  let o = ["th","st","nd","rd"];
  let result = n % 100;

  return result + (o[n - 20] % 10 || o[n] || o[0]);
}

for (let n = 0; n < color.length; n++) {
  let ordinal = n + 1;
  let result = `${Ordinal(ordinal)} Choice is ${color[n]}.`;
  console.log(result);
}

