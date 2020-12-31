const regexVowels = /[aeiou]/g

function vowelsAndConsonants(s) {
  const vowelsMatch = s.match(regexVowels);
  const vowelsReplace = s.replace(regexVowels, '');
  const newString = vowelsMatch.join('') + vowelsReplace;
  let n = 0;
  while (n < newString.length) {
    console.log(newString[n]);
    n += 1;
  }
}

console.log(vowelsAndConsonants('javascriptloops'));