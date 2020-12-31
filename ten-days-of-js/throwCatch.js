

function isPositive(a) {
  if (a > 0) {
    throw new Error('YES');
  } else if (a == 0) {
    throw new Error('Zero Error');
  } else {
    throw new Error('Negative Error');
  }
}

try {
  console.log(isPositive(-1));
}
catch (e) {
  console.log(e.message);
}

try {
  console.log(isPositive(0));
}
catch (e) {
  console.log(e.message);
}

try {
  console.log(isPositive(1));
}
catch (e) {
  console.log(e.message);
}