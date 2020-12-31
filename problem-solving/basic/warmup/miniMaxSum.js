let arr = [7, 69, 2, 221, 8974];
arr.sort(function(a, b) {
  return a - b;
});

function miniMaxSum(arr) {
    let minimalSum = 0;
    let maximumSum = 0;
    for (let index = 0; index < arr.length-1; index += 1) {
        minimalSum += arr[index];
    }
    for (let index1 = 1; index1 < arr.length; index1 += 1) {
        maximumSum += arr[index1];
    }
    console.log(minimalSum, maximumSum);
}
miniMaxSum(arr);
