// Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.

const areaOfTriangle = (a, b, c) => {
  const s = (a + b + c) / 2;
  const area = Math.sqrt(s * ((s - a) * (s - b) * (s - c))).toFixed(2);
  
  return {area};
};

const {area} = areaOfTriangle(5,6,7);
console.log(area);

