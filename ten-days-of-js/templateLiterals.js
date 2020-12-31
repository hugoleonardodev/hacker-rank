const exp = [140, 48];

const lit = ['The area is: ', '.\nThe perimeter is: ', '.'];

function sides(literals, ...expressions) {

  const [lit, [area, perimeter]] = [literals, expressions];
  console.log(area);
  console.log(perimeter);

  const s1 = ((perimeter + Math.sqrt((perimeter**2) - (16 * area))) / 4);
  const s2 = ((perimeter - Math.sqrt((perimeter**2) - (16 * area))) / 4);

  const newArr = [];

  newArr.push(s1);
  newArr.push(s2);

  return newArr;
}

console.log(sides(lit, exp));