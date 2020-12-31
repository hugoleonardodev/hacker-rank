function findSubstrings(s, k) {
  let string = s;
  const counter = s.length - k;
  const arrayWithSubStrings = [];
  for (let index = 0; index <= counter; index += 1) {
    let subString = string.slice(index, k + index);
    arrayWithSubStrings.push(subString);
  }
  const regex = /[aeiou]/ig;

  const arr = arrayWithSubStrings;
  if (arr.find(word => word.match(regex))) {
    const mapped = arr.map((element) => element.match(regex).length);
    const position = mapped.find(e=>e = Math.max(...mapped));
    return arr[position];
  
  } else {
    return ('Not found!');
  }
}

console.log(findSubstrings('azerdii', 5));

console.log(findSubstrings('qwdftr', 2));

console.log(findSubstrings('eiuaooo', 4));
