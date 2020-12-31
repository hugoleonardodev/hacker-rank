const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getDayName(dateString) {
  const newDate = new Date(dateString);
  const dayNumber = newDate.getDay();
  return weekDays[dayNumber];
}

console.log(getDayName('10/11/2009'));

console.log(getDayName('11/10/2010'));