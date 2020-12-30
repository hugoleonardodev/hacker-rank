const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

const regex = /\A\A+/g;

function happyLadyBus(b) {
  if (b.includes('_')) {
    const arr = b.replace('_', '').split('').sort();
    const subArr = []
    let counter = arr.length;
    while (counter > 0) {
      let bug = arr[0];
      let subArrLength = arr.filter(bugs => bugs === bug).length;
      subArr.push(arr.filter(bugs => bugs === bug));
      arr.splice(0, arr.filter(a => a === arr[0]).length);
      counter -= subArrLength;
    }
    if (subArr.find(e => e.length < 2)) {
      return 'NO';
    } 
    return 'YES';
  } else {
    const arr = b.split('');
  }
}

console.log(happyLadyBus('AABBC'));

console.log(happyLadyBus('AAABBBC_CCD'));