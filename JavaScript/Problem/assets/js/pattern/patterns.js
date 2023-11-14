// Get Row as a input from users
let rows = +prompt(
  "Enter How Many Rows You Want to see, 'Press between 1 to 9'"
);

// Get which type pattern user want to show
let patternType = +prompt("Enter Pattern Type, 'Press between 1 to 10'");

// Get which type pattern user want to show
// let patternOutput = prompt("You Can Display: 'Letter', 'Number', 'Symbol', So which you want to display?");

// Pattern One
const patternOne = (n) => {
  let pattern1 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern1 += "x" + " ";
    }
    pattern1 += "\n";
  }

  return { pattern1 };
};

// Pattern Two
const patternTwo = (n) => {
  let pattern2 = "";
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern2 += "x" + " ";
    }
    pattern2 += "\n";
  }

  return { pattern2 };
};

// Pattern Three
const patternThree = (n) => {
  let pattern3 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern3 += "x" + " ";
    }
    pattern3 += "\n";
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      pattern3 += "x" + " ";
    }
    pattern3 += "\n";
  }

  return { pattern3 };
};

// Pattern Four
const patternFour = (n) => {
  let pattern4 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pattern4 += "  ";
    }
    for (let j = 1; j <= i; j++) {
      pattern4 += "x" + " ";
    }
    pattern4 += "\n";
  }

  return { pattern4 };
};

// Pattern Five
const patternFive = (n) => {
  let pattern5 = "";
  for (let i = n; i >= 1; i--) {
    for (let j = n - i; j >= 1; j--) {
      pattern5 += "  ";
    }
    for (let j = 1; j <= i; j++) {
      pattern5 += "x" + " ";
    }
    pattern5 += "\n";
  }

  return { pattern5 };
};

// Pattern Six
const patternSix = (n) => {
  let pattern6 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pattern6 += "  ";
    }
    for (let j = 1; j <= i; j++) {
      pattern6 += "x" + " ";
    }
    pattern6 += "\n";
  }

  for (let i = n - 1; i >= 1; i--) {
    for (let j = n - i; j >= 1; j--) {
      pattern6 += "  ";
    }
    for (let j = 1; j <= i; j++) {
      pattern6 += "x" + " ";
    }
    pattern6 += "\n";
  }

  return { pattern6 };
};

// Pattern Seven
const patternSeven = (n) => {
  let pattern7 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      pattern7 += "x" + " ";
    }
    pattern7 += "\n";
  }

  return { pattern7 };
};

// Pattern Eight
const patternEight = (n) => {
  let pattern8 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      pattern8 += j * i + " ";
    }
    pattern8 += "\n";
  }

  return { pattern8 };
};

// Pattern Nine
const patternNine = (n) => {
  let pattern9 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pattern9 += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      pattern9 += "x" + " ";
    }
    pattern9 += "\n";
  }

  return { pattern9 };
};

// Pattern Ten
const patternTen = (n) => {
  let pattern10 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pattern10 += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      pattern10 += "@" + " ";
    }
    pattern10 += "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      pattern10 += "  ";
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      pattern10 += "@" + " ";
    }
    pattern10 += "\n";
  }

  return { pattern10 };
};

// Pattern Ten
const patternEleven = (n) => {
  let pattern11 = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n - i; j++) {
      pattern11 += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern11 += "x" + " ";
    }
    pattern11 += "\n";
  }
  for (let i = n - 1; i >= 1; i--) {
    for (let j = 1; j <= n - i; j++) {
      pattern11 += " ";
    }
    for (let j = 1; j <= i; j++) {
      pattern11 += "x" + " ";
    }
    pattern11 += "\n";
  }

  return { pattern11 };
};

switch (patternType) {
  case 1:
    let { pattern1 } = patternOne(rows);
    console.log(pattern1);
    break;
  case 2:
    let { pattern2 } = patternTwo(rows);
    console.log(pattern2);
    break;
  case 3:
    let { pattern3 } = patternThree(rows);
    console.log(pattern3);
    break;
  case 4:
    let { pattern4 } = patternFour(rows);
    console.log(pattern4);
    break;
  case 5:
    let { pattern5 } = patternFive(rows);
    console.log(pattern5);
    break;
  case 6:
    let { pattern6 } = patternSix(rows);
    console.log(pattern6);
    break;
  case 7:
    let { pattern7 } = patternSeven(rows);
    console.log(pattern7);
    break;
  case 8:
    let { pattern8 } = patternEight(rows);
    console.log(pattern8);
    break;
  case 9:
    let { pattern9 } = patternNine(rows);
    console.log(pattern9);
    break;
  case 10:
    let { pattern10 } = patternTen(rows);
    console.log(pattern10);
    break;
  case 11:
    let { pattern11 } = patternEleven(rows);
    console.log(pattern11);
    break;
  default:
    console.log("Please enter valid number!");
    break;
}
