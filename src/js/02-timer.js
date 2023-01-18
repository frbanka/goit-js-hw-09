import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timerParent = document.querySelectorAll('.timer');
const timerEl = document.querySelectorAll('.field');
const pageBody = document.querySelector('body');
const goBackBtn = document.querySelector('p');

pageBody.setAttribute(
  'style',
  'display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:10px'
);
goBackBtn.setAttribute('style', 'position:absolute;padding-right:90%;top:1%');

timerParent.forEach(e =>
  e.setAttribute(
    'style',
    'display:flex;flex-direction:row;justify-content:center;align-items:center;gap:20px'
  )
);
timerEl.forEach(e =>
  e.setAttribute(
    'style',
    'display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:24px'
  )
);

const dateInput = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');

const daysField = document.querySelector('[data-days]');
const hoursField = document.querySelector('[data-hours]');
const minutesField = document.querySelector('[data-minutes]');
const secondsField = document.querySelector('[data-seconds]');

let userDate = null;
let dateTimer = null;

startButton.setAttribute('style', 'width:100px;height:30px;');
startButton.setAttribute('disabled', true);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      window.alert('Please choose a date in the future');
      startButton.setAttribute('disabled', true);
    } else {
      userDate = selectedDates[0];
      startButton.removeAttribute('disabled');
      startButton.addEventListener('click', startTimer);
    }
  },
};
flatpickr('#datetime-picker', options);

function startTimer() {
  dateTimer = setInterval(() => {
    const currentTime = Date.now();
    const countdownTime = userDate - currentTime;

    startButton.setAttribute('disabled', true);
    dateInput.setAttribute('disabled', true);

    if (countdownTime < 1000) {
      clearInterval(dateTimer);
      startButton.removeAttribute('disabled');
    }
    const { days, hours, minutes, seconds } = convertMs(countdownTime);

    updateTime({ days, hours, minutes, seconds });
  }, 1000);
}

function updateTime({ days, hours, minutes, seconds }) {
  daysField.textContent = days;
  hoursField.textContent = hours;
  minutesField.textContent = minutes;
  secondsField.textContent = seconds;
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}
