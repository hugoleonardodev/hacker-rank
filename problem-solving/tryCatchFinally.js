function reverseString(s) {
  try {
      const stringArr = s.split('');
      const reverseArr = stringArr.reverse();
      const reverseStr = reverseArr.join('');
      console.log(reverseStr);
  }
  catch (e) {
      console.log(e.message);
      console.log(s);
  }
}

console.log(reverseString('1234'));
console.log(reverseString(1234));