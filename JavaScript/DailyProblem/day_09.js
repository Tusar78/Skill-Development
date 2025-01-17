/*
Problem: Calculate the Area of a Triangle using "Heron's Law"
You are given the lengths of three sides of a triangle. Your task is to calculate the area of the triangle.

Input:
Three numbers a, b, and c representing the lengths of the triangle's sides.

Condition:
The sum of any two sides must be greater than the third side.

Output:
The area of the triangle rounded to two decimal places. If the given sides cannot form a triangle, return "Invalid Triangle".

Example:
javascript
Copy
Edit
findTriangleArea(3, 4, 5); // Output: 6.00
findTriangleArea(6, 8, 10); // Output: 24.00
findTriangleArea(1, 2, 3); // Output: "Invalid Triangle" 
Formula for Solution:
To calculate the area, use Heron's Formula:

First, calculate the semi-perimeter:
𝑠=(𝑎+𝑏+𝑐)/2
​
Then, calculate the area:
Area=Math.sqrt(𝑠⋅(𝑠−𝑎)⋅(𝑠−𝑏)⋅(𝑠−𝑐))
*/

// const findTriangleArea = (a, b, c) => {
//   if (
//     !a &&
//     !b &&
//     !c &&
//     typeof a !== "number" &&
//     typeof b !== "number" &&
//     typeof c !== "number"
//   ) {
//     return "Give me number value";
//   }

//   const s = (a + b + c) / 2;
//   const area = +Math.sqrt(s * (s - a) * (s - b) * (s - c)).toFixed(2);

//   if (area === 0 || isNaN(area)) {
//     return "Invalid Triangle";
//   }

//   return area;
// };

// const result1 = findTriangleArea(6, 8, 10);
// console.log(result1);

const findTriangleArea = (a, b, c) => {
    if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
        return 'Please prodive numeric values for all slides'
    }

    if (a + b <= c || b + c <= a || c + a <= b) {
        return "Invalid Triangle"
    }

    const s = (a + b + c) / 2;
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
    
    return area.toFixed(2);
}

const result1 = findTriangleArea(1, 2, 3);
console.log(result1);


/*
Problem: Area of a Rectangle
Problem Statement:
Write a function findRectangleArea that takes two parameters, length and width, representing the dimensions of a rectangle. The function should return the area of the rectangle.

Requirements:

The function should validate that both length and width are positive numbers.
If either of the inputs is invalid (not a number or non-positive), return an appropriate error message.
The area should be rounded to 2 decimal places if necessary.
Examples:

javascript
Copy
Edit
findRectangleArea(5, 10); // Output: 50
findRectangleArea(7.5, 3.2); // Output: 24.00
findRectangleArea(-5, 10); // Output: "Invalid dimensions"
findRectangleArea(0, 10); // Output: "Invalid dimensions"
findRectangleArea("five", 10); // Output: "Invalid input"
*/

const findRectangleArea = (l, w) => {
    if (typeof l !== 'number' || typeof w !== 'number') {
        return 'Invalid input'
    }

    if (l <= 0 || w <= 0) {
        return 'Invalid dimensions'
    }

    const area = l * w;

    return Number.isInteger(area) ? area : area.toFixed(2);
}

const result2 = findRectangleArea(5, 10);
console.log(result2);


/*

Problem: Area of a Circle
Write a function findCircleArea(radius) that calculates and returns the area of a circle given its radius. The function should:

Return the area rounded to two decimal places.
Handle invalid inputs gracefully:
If the radius is not a number or is less than or equal to zero, return the message: "Invalid radius".
Examples:

javascript
Copy
Edit
console.log(findCircleArea(7)); // 153.94
console.log(findCircleArea(3.5)); // 38.48
console.log(findCircleArea(-5)); // "Invalid radius"
console.log(findCircleArea("five")); // "Invalid radius"

*/

const findCircleArea = r => {
    if (r <= 0 || typeof r !== 'number') {
        return "Invalid radius";
    }

    const PI = Math.PI;
    const area = PI * (r * r);

    return area.toFixed(2);
}

const result3 = findCircleArea("five");
console.log(result3);
