const base = +prompt("Enter Base: ");
const height = +prompt("Enter Height: ");


// Area of Triangle Function
const areaOfTriangle = (b, h) => {
  const area = (b * h) / 2;
  return area;
}

const area = areaOfTriangle(base, height);

console.log(`Area of Triangle = `, area);