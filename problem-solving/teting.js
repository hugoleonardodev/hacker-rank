const arr9 = [10, 10, 10, 10, 20, 20, 20, 30, 50];//3
const arr10= [1, 1, 1, 1, 2, 3, 3, 3, 3, 3];//4
const arr15 = [1, 1, 1, 2, 2, 2, 3, 3, 3, 3, 5, 5, 5, 5, 6];//6
const arr20 = [1, 1, 3, 3, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6];//9
const arr100 = ["1", "10", "10", "10", "10", "100", "100", "11", "11", "12", "14", "14", "15", "15", "15", "17", "17", "18", "19", "20", "20", "21", "22", "23", "24", "24", "26", "26", "27", "3", "34", "35", "36", "38", "38", "39", "4", "4", "42", "43", "43", "43", "44", "44", "44", "45", "45", "45", "48", "48", "5", "5", "5", "51", "53", "54", "54", "54", "55", "58", "58", "60", "60", "63", "64", "64", "65", "65", "66", "69", "7", "70", "72", "74", "75", "75", "77", "78", "78", "78", "80", "80", "81", "82", "83", "83", "84", "86", "87", "87", "9", "91", "91", "93", "94", "94", "96", "97", "97", "98"];//30

function sockMerchant(ar, n) {
  if (n < 100) {
    const filteringSets = [];
    for (let index = 1; index <= n; index += 1) {
      filteringSets.push(ar.filter(sets => parseInt(sets) === ar[index]));
    }
    const onlySetsPlusTwo = filteringSets.filter(e => e.length > 1);
    const onlyPairs = [];
      onlySetsPlusTwo.forEach(set => {
        if ((set.length) % 2 === 0) {
          onlyPairs.push(set);
        } else {
        onlyPairs.push(set.slice(1));
        }
      })
    const pairsCounter = [];
      onlyPairs.forEach(e => {
        pairsCounter.push(e.length / 2);
      })
    const pairsNumber = pairsCounter.reduce((acc, curr) => acc + curr);
    return pairsNumber;
  }
  const filteringSets = [];
  for (let index = 1; index <= n; index += 1) {
    filteringSets.push(ar.filter(sets => parseInt(sets) === index));
  }
  const onlySetsPlusTwo = filteringSets.filter(e => e.length > 1);
  const onlyPairs = [];
    onlySetsPlusTwo.forEach(set => {
      if ((set.length) % 2 === 0) {
        onlyPairs.push(set);
      } else {
      onlyPairs.push(set.slice(1));
      }
    })
  const pairsCounter = [];
    onlyPairs.forEach(e => {
      pairsCounter.push(e.length / 2);
    })
  const pairsNumber = pairsCounter.reduce((acc, curr) => acc + curr);
  return pairsNumber;
}

console.log(sockMerchant(arr9, arr9.length));
// console.log(sockMerchant(arr10));
// console.log(sockMerchant(arr15));
// console.log(sockMerchant(arr20));
console.log(sockMerchant(arr100, arr100.length));