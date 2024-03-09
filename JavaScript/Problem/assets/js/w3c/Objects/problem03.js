/**
 * 3. Write a JavaScript program to get the length of a JavaScript object.
 */

const lengthOfObject = (obj) => {
  let len = 0;
  if (typeof obj === "object" && !Array.isArray(obj) && obj !== null) {
    for (const key in obj) {
        len++;
    }
  }

  return {len};
};

const person = {
    name: 'Tusar',
    age: 25,
    roll: 62,
    clsas: "XII"
}

const {len} = lengthOfObject(person);
console.log(len);