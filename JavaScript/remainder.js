let num1, num2, dividend, divisor, sign, count, result;

num1 = +prompt("Enter Dividend Number: ", "");
num2 = +prompt("Enter Dividend Number: ", "");

sign = num1 < 0 ? -1 : 1;

dividend = Math.abs(num1);
divisor = Math.abs(num2);

count = dividend;
while (count >= divisor) {
  count = count - divisor;
}

result = count * sign;

result === 1 ? console.log("This is Odd") : console.log("This is Even");