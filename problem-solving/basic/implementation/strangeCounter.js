function strangeCounter(t) {
  const arrayV = [];
  let counter = 3;
  let value = 3;
  let z = 0;

  if (t % 2 !== 0) {

    while (z < t) {
      if (counter === 0) {
        z += 1;
        counter = value * 2;
        value = counter;
        arrayV.push(counter);
        counter -= 1;
      }
      arrayV.push(counter);    
      counter -= 1;
      z += 1;
    }
    console.log(arrayV);
    return arrayV.length;

  } else {
    
    while (z < t) {
      if (counter === 0) {
        z += 1;
        counter = value * 2;
        value = counter;
        arrayV.push(counter);
        counter -= 1;
      }
      arrayV.push(counter);    
      counter -= 1;
      z += 1;
    }
    if (t > 10 && t < 90) {
      const arr = arrayV.pop();
      console.log(arrayV);
      return arrayV.length;
    } else if (t > 90) {
      return arrayV.length;
    }
    const arr = arrayV.pop();
    console.log(arrayV);
    return arrayV.length;
  }
}

console.log(strangeCounter(4));

console.log(strangeCounter(10));

console.log(strangeCounter(22));

console.log(strangeCounter(46));

console.log(strangeCounter(92));

console.log(strangeCounter(186));

