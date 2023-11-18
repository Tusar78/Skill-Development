// Write a JavaScript function to check whether an `input` is an array or not.


// May Solution
const isArray = (arr) => {
  const checkArg = arr.constructor.toString();
  if (checkArg.includes('Array')) {
    return 'This is an Array';
  }
  return 'This is not an Array';
}

// const checkArray = isArray([1, 2]);
const checkArray = isArray('Tusar');
console.log(checkArray);