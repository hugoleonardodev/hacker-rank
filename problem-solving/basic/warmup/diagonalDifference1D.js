function diagonalDifference(arr) {
  const diagonalA = [];
  const diagonalB = [];
  for (let index = 0; index < arr.length; index += (Math.sqrt(arr.length) + 1)) {
    diagonalA.push(arr[index]);
  }
  for (let index = (Math.sqrt(arr.length) -1); index < (arr.length - (Math.sqrt(arr.length) - 1)); index += (Math.sqrt(arr.length) - 1)) {
    diagonalB.push(arr[index]);
  }
  console.log(diagonalA);
  console.log(diagonalB);
  const sumA = diagonalA.reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  },0);
  const sumB = diagonalB.reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  },0);
  return Math.abs(sumA - sumB);
}

console.log(diagonalDifference([11, 2, 4, 4, 5, 6, 10, 8, -12]));

console.log(diagonalDifference([1, 2, 3, 4, 5, 6, 9, 8, 9]));