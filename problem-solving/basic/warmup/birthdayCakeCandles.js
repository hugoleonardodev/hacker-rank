let candles = [4, 4, 1, 3, 5, 6, 7, 1, 3, 5, 6, 7, 7];
let number;
let highest;
let compareNumber;
let counter = 0;
let num1 = candles[0];
let num2 = candles[1];

if (num2 > num1) {
  highest = num2;
} else {
  highest = num1;
}

for (let index = 2; index < candles.length; index += 1) {
  number = candles[index]
  if (highest < candles[index-1]) {
    highest = candles[index-1];
  } else {
      continue;
  }
}

for (let index1 = 0; index1 < candles.length; index1 += 1) {
    compareNumber = candles[index1];
    if (compareNumber === highest) {
        counter += 1;
    } else {
        continue;
    }
}

console.log(counter);
