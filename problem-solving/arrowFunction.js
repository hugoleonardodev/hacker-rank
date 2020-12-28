const arr = [1, 2, 3, 4, 5];

const modifyArray = (nums) => {
  return nums.reduce((acc, cur) => {
    if (cur % 2 === 0) {
        acc.push(cur*2);
    } else {
        acc.push(cur*3);
    }
    return acc;
}, []);
}

console.log(modifyArray(arr));