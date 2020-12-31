function getLetter (s) {
  let letter = s[0];
  switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return 'A';
      break;
    case 'b':
    case 'c':
    case 'd':
    case 'f':
    case 'g':
      return 'B';
      break;
    case 'h':
    case 'j':
    case 'k':
    case 'l':
    case 'm':
      return 'C'
      break;
    case 'n':
    case 'p':
    case 'q':
    case 'r':
    case 's':
    case 't':
    case 'v':
    case 'w':
    case 'x':
    case 'y':
    case 'z':
      return 'D'
      break;
  }
  return letter;
}

console.log(getLetter('adfgt'));

console.log(getLetter('zdfgt'));