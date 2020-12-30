const result = document.getElementById("res");
const buttons = document.getElementById("btns");
const zero = document.getElementById("btn0");
const one = document.getElementById("btn1");
const clear = document.getElementById("btnClr");
const evaluate = document.getElementById("btnEql");
const sum = document.getElementById("btnSum");
const sub = document.getElementById("btnSub");
const mul = document.getElementById("btnMul");
const div = document.getElementById("btnDiv");

function printZero() {
  result.innerText = zero.innerText;
}

zero.addEventListener('click', printZero);