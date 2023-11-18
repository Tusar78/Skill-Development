// Write a program to check a number is palindrome or not


let num = +prompt("Enter the number: ");

const getPalindrome = num => {
  let temp  = num;
  let palindrome = 0;
  let result;
  let flag;

  while (temp != 0) {
    result = temp % 10;
    palindrome = palindrome * 10 + result;
    temp = Math.trunc(temp / 10); 
  }

  if (palindrome == num) {
    flag = true;
  } else {
    flag = false;
  }
  
  return flag;
}

let palindrome = getPalindrome(num);

if (palindrome) {
  console.log('This is palindrome');
} else {
  console.log('This is not palindrome');
}