const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const pageBody = document.querySelector('body');

startButton.addEventListener('click', changeColor);
stopButton.addEventListener('click', stopChangeColor);

let colorTimer = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function changeColor() {
  colorTimer = setInterval(() => {
    let randomColor = getRandomHexColor().toString();
    pageBody.style.backgroundColor = randomColor;
  }, 1000);
  startButton.setAttribute('disabled', 'true');
  stopButton.removeAttribute('disabled');
}
function stopChangeColor() {
  clearInterval(colorTimer);
  stopButton.setAttribute('disabled', 'true');
  startButton.removeAttribute('disabled');
}
