Window.onload = createButtons();

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const rotatingNumbers = [1, 2, 3, 4, 6, 7, 8, 9]; // [9, 1, 2, 3, 4, 5, 6, 7, 8]

const rotatingArray = () => {
  const firstElement = rotatingNumbers.pop();
  rotatingNumbers.unshift(firstElement);
  return rotatingNumbers;
}

let counter = 0;

function rotateClockwise() {
  const numbersIds = [];
  const numbersChange = rotatingArray();
  console.log( numbersChange);
  numbers.forEach(number => numbersIds.push(`btn${number}`));


  while (counter < 3) {
    document.getElementById(numbersIds[counter]).innerText = numbersChange[counter];
    counter += 1;
  }
  if (counter === 3) {
    document.getElementById(numbersIds[counter - 3]).innerText = numbersChange[counter + 1];
    document.getElementById(numbersIds[counter + 0]).innerText = numbersChange[counter + 3];
    document.getElementById(numbersIds[counter + 2]).innerText = numbersChange[counter + 0];
    document.getElementById(numbersIds[counter + 3]).innerText = numbersChange[counter + 4];
    document.getElementById(numbersIds[counter + 4]).innerText = numbersChange[counter - 3];
    document.getElementById(numbersIds[counter + 5]).innerText = numbersChange[counter + 2];
    counter = 0;
  // } else if (counter === 4) {
    // document.getElementById(numbersIds[counter]).innerText = numbers[counter];
    // document.getElementById(numbersIds[counter]).innerText = numbers[counter - 4];
    // document.getElementById(numbersIds[counter]).innerText = numbers[counter - 4];
    // counter += 1;
  // } else if (counter === 5) {
    // document.getElementById(numbersIds[counter]).innerText = numbers[counter - 4];
    // counter += 1;
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
