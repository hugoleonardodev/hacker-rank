function timeConversion(s) {
  if (s.endsWith('AM') && s.startsWith('12')) {
  let to24Hour = s.split('').splice(0, 8);
  let hour = ['0', '0'];
  return hour.concat(to24Hour.splice(2, 8)).join('');
  } else if (s.endsWith('PM') && s.startsWith('12')) {
    let to24Hour = s.split('').splice(0, 8);
    return to24Hour.join('');
  } else if (s.endsWith('PM')) {
    let to24Hour = s.split('').splice(0, 8);
    let hour = (parseInt(to24Hour.slice(0, 2).join('')) + 12).toString().split('');
    return hour.concat(to24Hour.splice(2, 8)).join('');
  } else if (s.endsWith('AM')) {
    let to24Hour = s.split('').splice(0, 8);
    return to24Hour.join('');
  }
}

console.log(timeConversion('12:01:00AM'));

console.log(timeConversion('12:01:00PM'));

console.log(timeConversion('07:05:45PM'));

console.log(timeConversion('06:40:03AM'));