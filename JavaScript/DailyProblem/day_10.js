/*
Problem: Convert Temperature Between Celsius and Fahrenheit
Part 1: Convert Celsius to Fahrenheit
Write a function to convert a temperature from Celsius to Fahrenheit. The formula to convert is:
F = (C × 9/5) + 32

Part 2: Convert Fahrenheit to Celsius
Write a function to convert a temperature from Fahrenheit to Celsius. The formula to convert is:
C = (F - 32) × 5/9

Requirements:
Handle edge cases where input is not a valid number.
Ensure proper rounding to 2 decimal places for the result.
Return an error message if the input is invalid.
*/

// Convert Celsius to Fahrenheit
/*
const convertCelsiusToFahrenheit = c => {  
    // Edge Case
    if (typeof c !== 'number') {
        return 'Invalid input, please provide a number'
    }
    
    // Base Case
    const F = (c * 9 / 5) + 32;
    return F.toFixed(2)
}

const Fahrenheit = convertCelsiusToFahrenheit(32);
console.log(Fahrenheit);

// Conver Fahrenheit to Celsius
const convertFahrenheitToCelsius = f => {
    // Edge Case
    if (typeof f !== 'number') {
        return 'Invalid input, please provide a number'
    }

    // Base Case
    const C = (f - 32) * (5/9);
    return C.toFixed(2);
}

const Celsius = convertFahrenheitToCelsius('fg')
console.log(Celsius);
*/

/*

let a = 10;
let b = 20;
console.log(a, b);

[b, a] = [a, b]
console.log(a, b);
*/

/*
Problem: Solve Quadratic Equation
A quadratic equation is of the form:
ax² + bx + c = 0

Write a JavaScript function to find the roots of a quadratic equation.
The function should accept three inputs:

a (coefficient of x²)
b (coefficient of x)
c (constant term)
The roots can be calculated using the quadratic formula:​ 

If the discriminant (𝑏2−4𝑎𝑐)is negative, return "No Real Roots".
If the discriminant is zero, return a single root.
If the discriminant is positive, return both roots.

Example Input and Output:
Input: a = 1, b = -3, c = 2
Output: [2, 1] (Roots are 2 and 1)

Input: a = 1, b = -2, c = 1
Output: [1] (Root is 1)

Input: a = 1, b = 1, c = 1
Output: "No Real Roots"
*/

const quadraticEquation = (a, b, c) => {
  // Edge Case
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return { error: "Invalid Input, Provide a valid number" };
  }

  if (a === 0) {
    return { error: "Not a Quadratic Equation" };
  }

  // Discriminant Calculation
  let d = b * b - 4 * a * c;

  // Check the nature of roots
  if (d < 0) {
    return { roots: null, message: "No Real Roots (Complex Roots Exist)" };
  }

  const sqrtD = Math.sqrt(d);
  const x1 = (-b + sqrtD) / (2 * a);
  const x2 = (-b - sqrtD) / (2 * a);

  return d === 0 ? { root: [x1] } : { root: [x1, x2] };
};

const result = quadraticEquation(1, -3, 2);
console.log(result);
