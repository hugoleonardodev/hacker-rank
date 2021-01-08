const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const regex = /\A\A+/g;

function happyLadybugs(b) {
  if (b.includes('_')) {
    const arr = b.replace('_', '').split('').sort();
    console.log(arr);
    const subArr = []
    let counter = arr.length;
    while (counter > 0) {
      let bug = arr[0];
      let subArrLength = arr.filter(bugs => bugs === bug).length;
      subArr.push(arr.filter(bugs => bugs === bug));
      arr.splice(0, arr.filter(a => a === arr[0]).length);
      counter -= subArrLength;
    }
    console.log(subArr);
    if (b.match(/\_\_+/) && b.length < 3) {
      return 'YES';
    }else if (subArr.find(e => e.length < 2)) {
      return 'NO';
    }
    return 'YES';
  } else {
    const arr = b.split('');
    console.log(arr);
    if (arr.find(a => a.length < 2) && arr[0].match(arr[0])) {
      return 'YES';
    }
    if (arr.find(a => a.length < 2) && arr[0].match('_')) {
      return 'NO';
    } else if (arr.find(a => a.length < 2)) {
      return 'NO';
    }
    return 'YES';
  }
}

// console.log(happyLadyBus('AABBC'));

// console.log(happyLadyBus('AABBC_C'));

// console.log(happyLadyBus('DD__FQ_QQF'));

// console.log(happyLadyBus('_'));

// console.log(happyLadybugs('AABCBC'));

// console.log(happyLadybugs('RBY_YBR'));

// console.log(happyLadybugs('X_Y__X'));

// console.log(happyLadybugs('__'));

// console.log(happyLadybugs('B_RRBR'));

// console.log(happyLadybugs('_'));

// console.log(happyLadybugs('RBRB'));

console.log(happyLadybugs('RRRR'));

// console.log(happyLadybugs('BBB'));

// console.log(happyLadybugs('BBB_'));

// console.log(happyLadybugs('X_Y__X'));

// console.log(happyLadybugs('X_Y__X'));

