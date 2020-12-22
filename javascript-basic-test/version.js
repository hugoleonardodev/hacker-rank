function mostBalancedPartition(parent, files_size) {
  let partitionA = [];
  let partitionB = [];

  if (files_size.every(element => element.toString().length >= 2) === true) {
    // const binaryToDecimal = files_size.map(binary => parseInt(binary, 2));
    partitionA.push(files_size[0]);
    files_size.shift();
    parent.shift();
    if (parent.every(node => node === parent[0])) {
      partitionB.push(files_size[0]);
      files_size.shift();
      for (let index = 0; index < files_size.length; index += 1) {
        partitionA.push(files_size[index]);
      }
      return Math.abs(partitionB.reduce((acc, cur) => acc = acc + cur) - partitionA.reduce((acc, cur) => acc = acc + cur));
    }
  } else if (parent.every(node => node < node + 1)) {
    partitionA = files_size.slice(Math.ceil((files_size.length) / 2));
    partitionB = files_size.slice(0, Math.ceil((files_size.length) / 2 ));
    return Math.abs(partitionB.reduce((acc, cur) => acc = acc + cur) - partitionA.reduce((acc, cur) => acc = acc + cur));
  }
}

console.log(mostBalancedPartition([-1, 0, 1, 2], [1, 4, 3, 4]));

console.log(mostBalancedPartition([-1, 0, 0, 0], [10, 11, 10, 10]));

