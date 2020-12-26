class Polygon {
  constructor(sidesLengthArray) {
    this.polygon = sidesLengthArray
    this.perimeter = perimeter;
  }
}

function perimeter() {
  return this.polygon.reduce((acc, cur) => {
    acc = acc + cur;
    return acc;
  });
}

let triangle = new Polygon([3, 4, 5]);

console.log(triangle.perimeter());