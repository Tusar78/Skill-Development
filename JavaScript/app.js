// "use strict"

const outer = 'Out';

function myFunc() {
  const inner = 'Inner';
  console.log(outer, inner);
}

myFunc();
console.log(outer, inner);