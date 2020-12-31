

function isPositive(a) {
  if (a > 0) {
    throw console.log('YES');
  } else if (a == 0) {
    throw console.log('Zero Error');
  } else {
    throw console.log('Negative Error');
  }
}

try {
  console.log(isPositive(-1));
}
catch (e) {
  console.log(e);
}
