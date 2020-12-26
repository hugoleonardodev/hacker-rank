/*
 * Implement a Polygon class with the following properties:
 * 1. A constructor that takes an array of integer side lengths.
 * 2. A 'perimeter' method that returns the sum of the Polygon's side lengths.
 */

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