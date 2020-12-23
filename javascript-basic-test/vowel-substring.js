function findSubstrings(s, k) {
  let string = s;
  const counter = s.length - k;
  const arrayWithSubStrings = [];
  for (let index = 0; index <= counter; index += 1) {
    let subString = string.slice(index, k + index);
    arrayWithSubStrings.push(subString);
  }
  return arrayWithSubStrings;
}

console.log(findSubstrings('azerdii', 5));

console.log(findSubstrings('qwdftr', 2));
