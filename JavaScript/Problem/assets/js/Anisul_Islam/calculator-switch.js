// Write a program to make a calculator
let firstNum = +prompt("Enter first number: ");
let secondNum = +prompt("Enter second number: ");

let operation = prompt("Addition(+), Subtraction(-), Multiplication(*), Divide(/)");


switch (operation) {
  case '+':
    let sum = firstNum + secondNum;
    alert(sum);
    break;
  case '-':
    let sub = firstNum - secondNum;
    alert(sub);
    break;
  case '*':
    let mul = firstNum * secondNum;
    alert(mul);
    break;
  case '/':
    let divide = firstNum / secondNum;
    alert(divide);
    break;
  default:
    break;
}