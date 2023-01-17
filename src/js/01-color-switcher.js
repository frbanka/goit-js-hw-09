const startButton = document.querySelectorAll('data-start');
const stopButton = document.querySelectorAll('data-stop');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
