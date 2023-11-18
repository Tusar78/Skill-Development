// Write a program to check a letter is vowel or consonant

let ch = prompt("Writer a latter: ");

const isVowel = ch => {
  let result;

  if (ch == 'a' || ch == 'A' ||
      ch == 'e' || ch == 'E' ||
      ch == 'i' || ch == 'I' ||
      ch == 'o' || ch == 'O' ||
      ch == 'u' || ch == 'U') {
    result = 'Vowel';
  } else {
    result = 'Consonant';
  }

  return result;
}

let result = isVowel(ch);
console.log(`${ch} is ${result}`);