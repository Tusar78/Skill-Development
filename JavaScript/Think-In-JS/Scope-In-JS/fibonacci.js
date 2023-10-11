//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144

let n1= 0;
let n2 = 1;
let nextTerm;

for (let i = 1; i < 10; i++) {
  console.log(n1);
  nextTerm = n1 + n2;
  n1 = n2;
  n2 = nextTerm;
}