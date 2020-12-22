function mostBalancedPartition(parent, files_size) {
  let partitionA = [];
  let partitionB = [];

  function testingFileType(files_size) {
    return files_size.every(element => element.toString().length >= 2);
  };

  if (testingFileType(files_size)) {
    partitionA.push(files_size[0]);
    const binaryToDecimal = files_size.map(binary => parseInt(binary, 2));
    return binaryToDecimal;
  }

  partitionA.push(files_size[0]);
  for (let index = 1; index < parent.length; index += 1) {

    if (files_size[index])

    if (parent[index] === parent[index + 1]) {
      partitionB.push(files_size[index]);
    } else if (parent[index] < parent[index +1]) {
      partitionA.push(files_size[index]);
    } else {
      partitionB.push(files_size[index]);
    }
  }
  return partitionA, partitionB;
}

console.log(mostBalancedPartition([-1, 0, 0, 1, 1, 2], [1, 2, 2, 1, 1, 1]));
// console.log(mostBalancedPartition([-1, 0, 0, 0], [10, 11, 10, 10]));