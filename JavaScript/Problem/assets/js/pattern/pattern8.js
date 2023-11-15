// Pattern Type
/*
x x x x x
x       x
x       x
x       x
x x x x x

*/

let rows = +prompt(
  "Enter How Many Rows You Want to see, 'Press between 1 to 9'"
);

const patternOne = (n) => {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i == 1 || i == n || j == 1 || j == n) {
        pattern += "x" + " ";
      } else {
        pattern += "  ";
      }
    }
    pattern += "\n";
  }

  return { pattern };
};

