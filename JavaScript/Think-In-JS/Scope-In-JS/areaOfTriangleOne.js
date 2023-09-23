const a = +prompt("Enter first value: ");
const b = +prompt("Enter second value: ");
const c = +prompt("Enter third value: ");

const semiPerimeter = (a + b + c) / 2;

const areaOfTriangle = (semi, a, b, c) => {
  const area = Math.sqrt(semi * (semi - a) * (semi - b) * (semi - c));
  return area;
}

const area = areaOfTriangle(semiPerimeter, a, b, c);

console.log(`Area of Triangle is = ${area}`);