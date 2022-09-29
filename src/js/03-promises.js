import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix'

const refs = {
  formEl: document.querySelector('form'),
  inputAmount: document.querySelector('[name="amount"]'),
  delayEl: document.querySelector('[name="delay"]'),
  stepEl: document.querySelector('[name="step"]')
};

let position = 0;
let intervalId = null;
let delay = null;
let isActive = null;

refs.formEl.addEventListener('submit', createPromise);

function createPromise(e) {
  e.preventDefault();
  const promis = new Promise((resolve, reject) => {

    if (isActive) { return };
    isActive = true;
    
    delay = Number(refs.delayEl.value);
  
    intervalId = setInterval(() => {
      delay += Number(refs.stepEl.value);
      position += 1;
    
      const shouldResolve = Math.random() > 0.3;

      if (shouldResolve) {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`)
      } else {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`)
      };

      if (position === Number(refs.inputAmount.value)) {

        clearInterval(intervalId);
      };

    }, delay);
  })
};