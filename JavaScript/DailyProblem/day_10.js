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

let a = 10;
let b = 20;
console.log(a, b);

[b, a] = [a, b]
console.log(a, b);
