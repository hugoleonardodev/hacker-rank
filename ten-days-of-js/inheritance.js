class Rectangle {
  constructor(w, h) {
      this.w = w;
      this.h = h;
  }
}

Rectangle.prototype.area = function area() {return this.w * this.h;}

function area() {
  return (this.w)**2; 
}

class Square extends Rectangle {
  constructor(w) {
    super(w);
    this.area = area;
  }
}

// const rec = new Rectangle(3,4);
const squ = new Square(3);

console.log(JSON.stringify(Object.getOwnPropertyNames(Rectangle.prototype))) 
console.log(JSON.stringify([ 'constructor' ]));
console.log(JSON.stringify(Object.getOwnPropertyNames(Square.prototype))) 

console.log(Square.prototype)

// console.log(rec.area());
console.log(squ.area());