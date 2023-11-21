// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

const str = "Hello World";

const swapCase = (str) => {
  let swapStr = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
      swapStr += str[i].toLowerCase();
    } else {
      swapStr += str[i].toUpperCase();
    }
  }

  return { swapStr };
};

const { swapStr } = swapCase(str);
console.log(swapStr);
