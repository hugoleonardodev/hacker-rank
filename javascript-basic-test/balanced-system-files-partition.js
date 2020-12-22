function mostBalancedPartition(parent, files_size) {
  let partitionA = [];
  let partitionB = [];
  partitionA.push(files_size[0]);
  for (let index = 1; index < parent.length; index += 1) {

    if (parent[index] === parent[index + 1]) {
      partitionB.push(files_size[index]);
    } else if (parent[index] < parent[index +1]) {
      partitionA.push(files_size[index]);
    } else {
      partitionB.push(files_size[index]);
    }
  }
  return partitionB;
}

console.log(mostBalancedPartition([-1, 0, 0, 1, 1, 2], [1, 2, 2, 1, 1, 1]));
console.log(mostBalancedPartition([-1, 0, 0, 0], [10, 11, 10, 10]));