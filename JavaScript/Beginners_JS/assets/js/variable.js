let message;

message = "Hello!";
console.log(message);

// Multiple variable in a line.

let user = "John",
  age = 25,
  message2 = "Hi There!";

let admin;
let name;

name = "john";
admin = name;
// alert(admin);

const OUR_PLANET = "Earth";
let ourPlanetName = "Earth";
let currentUserName = "Anonymous";

function ageCalculate(birthDate) {
  let date = new Date();  
  return date.getFullYear() - birthDate;
}

const myAge = ageCalculate(1999);
console.log(myAge);
