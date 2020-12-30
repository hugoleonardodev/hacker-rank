function bitwiseOperator(decimals) {
  const [n, k] = decimals;
  const s = [];
  for (let index = 0; index < n; index += 1) {
    s.push(index + 1);
  }
  let [a, b] = s.slice(k - 2, k).map(e => e.toString(2));
  let f = n.toString(2)
  // console.log(n);
  const c = a & b < f;
  const d = a & b;
  // console.log(c);
  // console.log(d);

  const minBitwiser = parseInt(c, 2);
  const maxBitwiser = parseInt(d, 2);
  // console.log(minBitwiser);
  // console.log(maxBitwiser);

  if (minBitwiser < maxBitwiser) {
    return maxBitwiser;
  }

  return minBitwiser;
}

// function getMaxLessThanK(n, k) {
//   let max = 0;

//   for (let a = 1; a <= n; a++) {
//     for (let b = a + 1; b <= n; b++) {
//       let bw = (a & b);

//       (bw < k && bw > max) && (max = bw);
//     }
//   }

//   return max;
// }

// from https://lunarscents.github.io/2019/06/07/bitwiseOperators/

console.log(bitwiseOperator([5, 2]));

console.log(bitwiseOperator([8, 5]));

console.log(bitwiseOperator([2, 2]));