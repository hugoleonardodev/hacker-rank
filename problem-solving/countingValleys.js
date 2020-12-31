const path1 = 'UDDDUDUU';
const path2 = 'DDUUDDUDUUUD';

function countingValleys(steps, path) {
  const stringToArray = path.split('');
  let globalCounter = 0;
  let valleys = 0;
  for (let index = 0; index < steps; index += 1) {
    if (stringToArray[index] === 'D') {
      globalCounter -= 1;
    }
    globalCounter += 1;
    if (globalCounter === 0 && stringToArray[index] === stringToArray[index + 1]) {
      valleys += 1;
    } else if (globalCounter === 0 && stringToArray[index] === stringToArray[index - 1]) {
      valleys += 1;
    } else if (globalCounter === 0 && stringToArray[index] !== stringToArray[index + 1]) {
      valleys += 1;
    }
    // valleys += 1;
  }
  return valleys;
}

console.log(countingValleys(path1.length, path1));
console.log(countingValleys(path2.length, path2));