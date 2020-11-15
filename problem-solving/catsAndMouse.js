function catAndMouse(x, y, z) {
    let mouseCat1 = Math.abs(x - z);
    let mouseCat2 = Math.abs(y - z);
    if (mouseCat1 === mouseCat2) {
      return 'Mouse C';
    } else if (mouseCat1 < mouseCat2) {
      return 'Cat A';
    } else {
    return 'Cat B';
    }    
  }
  