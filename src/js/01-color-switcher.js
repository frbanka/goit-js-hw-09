const startButton = document.querySelector('button[data-start]');
const stopButton = document.querySelector('button[data-stop]');
const pageBody = document.querySelector('body');

startButton.addEventListener('click', testFunc);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
function testFunc() {
  window.alert('woooow');
}
