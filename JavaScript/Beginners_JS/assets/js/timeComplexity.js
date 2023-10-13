const numbers = [];

for (let i = 0; i < 101; i++) {
  numbers[i] = 0;  
}

for (let i = 0; i < 101; i+=2) {
  numbers[i] = 1;  
}

const n = 11;

if (numbers[n]) {
  console.log(`This is even number`);
} else {
  console.log(`This is odd number`);
}