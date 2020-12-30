function diagonalDifference(arr) {
  const diagonalA = [];
  const diagonalB = [];

  let j = arr.length - 1;
  console.log(j);

  for (let i = 0; i < arr.length; i += 1) {
    diagonalA.push(arr[i][i]);
    diagonalB.push(arr[i][j]);
    j -= 1;
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

console.log(diagonalDifference([[11, 2, 4], [4, 5, 6], [10, 8, -12]]));

console.log(diagonalDifference([[1, 2, 3], [4, 5, 6], [9, 8, 9]]));