const result = document.getElementById("res");
const buttons = document.getElementById("btns");
const zero = document.getElementById("btn0");
const one = document.getElementById("btn1");
const sum = document.getElementById("btnSum");
const sub = document.getElementById("btnSub");
const mul = document.getElementById("btnMul");
const div = document.getElementById("btnDiv");
const clear = document.getElementById("btnClr");
const evaluate = document.getElementById("btnEql");

function printZero() {
  result.innerText = result.innerText + zero.innerText;
}

function printOne() {
  result.innerText = result.innerText + one.innerText;
}

function printPlus() {
  result.innerText = result.innerText + sum.innerText;
}

function printLess() {
  result.innerText = result.innerText + sub.innerText;
}

function printMult() {
  result.innerText = result.innerText + mul.innerText;
}

function printDivs() {
  result.innerText = result.innerText + div.innerText;
}

function clearAll() {
  result.innerText = '';
}

function printEvaluate() {
  const regex = /[/*+-]/g;
  const stringToEvaluate = result.innerText;
  const signal = stringToEvaluate.match(regex);
  const binaries = stringToEvaluate.split(signal);
  console.log(binaries);
  console.log(signal);
  if (signal.join('') === '+') {
    let res = parseInt(binaries[0], 2) + parseInt(binaries[1], 2);
    console.log(res.toString(2));
    result.innerText = res.toString(2);
  } else if (signal.join('') === '-') {
    let res = parseInt(binaries[0], 2) - parseInt(binaries[1], 2);
    console.log(res.toString(2));
    result.innerText = res.toString(2);
  } else if (signal.join('') === '*') {
    let res = parseInt(binaries[0], 2) * parseInt(binaries[1], 2);
    console.log(res.toString(2));
    result.innerText = res.toString(2);
  } else if (signal.join('') === '/') {
    let res = parseInt(binaries[0], 2) / parseInt(binaries[1], 2);
    console.log(res.toString(2));
    result.innerText = res.toString(2);
  }
}

zero.addEventListener('click', printZero);
one.addEventListener('click', printOne);
sum.addEventListener('click', printPlus);
sub.addEventListener('click', printLess);
mul.addEventListener('click', printMult);
div.addEventListener('click', printDivs);
clear.addEventListener('click', clearAll);
evaluate.addEventListener('click', printEvaluate);
