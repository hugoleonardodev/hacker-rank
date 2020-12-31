function gradingStudents(grades) {
  const newGrades = [];
  for (let index = 0; index < grades.length; index += 1) {
    let grade = grades[index].toString();
    let verifying = parseInt(grade.match(/\d/g).join(''));
    let gradeNext5Multiple = Math.ceil(grades[index] / 5) * 5;
    if (verifying <= 33) {
      newGrades.push(grades[index]);
    } else if (gradeNext5Multiple - verifying < 3) {      
      newGrades.push(gradeNext5Multiple);
    } else {
      newGrades.push(grades[index]);
    }
  }
  return newGrades;
}

function solve(grades){
  return grades.map((n) => {
    let diff = 5 - (n % 5);
    if(diff < 3 && n >= 38) {
        n += diff;
    }
    return n;
  })
}

console.log(gradingStudents([73, 67, 38, 33, 100,
  3,
  26,
  61,
  98,
  50,
  41,
  5,
  3,
  28,
  34,
  50]));