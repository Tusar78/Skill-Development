// With Temp Variable
let a = 10;
let b = 20;
console.log(a, b);
  let temp;
  temp = a;
  a = b;
  b = temp;
console.log(a, b);


// Without Temp Variable
let x = 100;
let y = 200;
console.log(x, y);
  x = x - y; // -100 
  y = x + y; // 100
  x = y - x; // 200
console.log(x, y);

// Library Function
let num1 = 10;
let num2 = 20;
console.log(num1, num2);
[num1, num2] = [num2, num1];
console.log(num1, num2);
