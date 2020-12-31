const object = [{x: 1, y: 1}, {x: 2, y: 3}, {x: 3, y: 3}, {x: 3, y: 4}, {x: 4, y: 5}]

function getCount(object) {
  let counter = 0;
  for (let index = 0; index < object.length; index += 1) {
    const x = object[index].x;
    const y = object[index].y;
    if (x === y) {
      counter += 1;
    }
    continue;
  }
  return counter;
}

console.log(getCount(object));