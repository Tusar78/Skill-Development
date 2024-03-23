function sample(a, b, sum) {
  return sum(a, b);
}

const sum = sample(10, 5, (a, b) => {
  return a + b;
});

console.log(sum);

