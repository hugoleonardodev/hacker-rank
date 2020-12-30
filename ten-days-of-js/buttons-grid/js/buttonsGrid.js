Window.onload = createButtons();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let rotatingNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const rotatingArray = () => {
  const a = rotatingNumbers.slice(0, 3);
  const b = rotatingNumbers.slice(3, 9);
  const c = a.pop();
  const d = b.shift();
  a.unshift(d);
  b.splice(1, 0, c);
  const e = b.splice(2, 1)[0];
  b.push(e);
  const f = b.splice(2, 1)[0];
  a.push(f);
  console.log(a);
  console.log(b);
  rotatingNumbers = a.concat(b);
  return rotatingNumbers;
}

function rotateClockwise() {
  const numbersIds = [];
  const numbersChange = rotatingArray();
  console.log(numbersChange);
  numbers.forEach(number => numbersIds.push(`btn${number}`));

  for (let index = 0; index < numbersChange.length; index += 1) {
    const btnId = numbersIds[index];
    document.getElementById(btnId).innerText = numbersChange[index];
  }

}

function createButtons() {
  const buttonsContainer = document.getElementById("btns");
  for (let index = 0; index < 9; index += 1) {
    let btn = document.createElement("button");
    btn.id = `btn${index + 1}`;
    btn.innerText = `${index + 1}`;
    buttonsContainer.appendChild(btn);
  }
  document.getElementById("btns").innerHTML = buttonsContainer.innerHTML;
}

document.getElementById("btn5").addEventListener('click', rotateClockwise);
