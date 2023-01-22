const firstDelay = document.querySelector('[name="delay"]');
const stepDelay = document.querySelector('[name="step"]');
const delayAmount = document.querySelector('[name="amount"]');
const subBtn = document.querySelector('.submit');
subBtn.addEventListener('click', submitPromise());

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

function submitPromise(e) {
  e.preventDefault();
  let delay = firstDelay.valueAsNumber;
  let step = stepDelay.valueAsNumber;
  let amount = delayAmount.valueAsNumber;
  for (let i = 1; i <= amount; i++) {
    createPromise(i, delay)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    delay += step;
  }
}
