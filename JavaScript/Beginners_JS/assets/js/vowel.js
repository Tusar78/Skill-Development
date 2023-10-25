let ch = 'f';

switch (ch) {
  case 'a':
  case 'e':
  case 'i':
  case 'o':
  case 'u':
  case 'A':
  case 'E':
  case 'I':
  case 'O':
  case 'U':
    console.log('This is Vowel');
    break;
  default:
    console.log('This is Consonant');
    break;
}