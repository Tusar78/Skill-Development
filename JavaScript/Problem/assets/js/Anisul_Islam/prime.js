// Write a program to check wether a number is prime or not

let num = +prompt("Enter the positive number: ");

const isPrime = (num) => {
  let prime = 1;

  if (num == 1) {
    console.log(`1 is neither prime nor composite number.`);
    prime = 0;
  } else if (num > 1) {
    for (let i = 2; i < num / 2; i++) {
      if (num % i == 0) {
        prime = -1;
        break;
      }
    }
  }

  return prime;
};

let prime = isPrime(num);

if (prime == 1) {
  console.log(`${num} is prime`);
} else if (prime == -1) {
  console.log(`${num} is not prime`);
}
