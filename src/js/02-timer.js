import flatpickr from "flatpickr";

import "flatpickr/dist/flatpickr.min.css";

import Notiflix from 'notiflix'

const refs = {
    start: document.querySelector('[data-start]'),
    inputE: document.querySelector('input'),
    timerEl: document.querySelector('.timer')
};

refs.start.setAttribute('disabled', '');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {

        let IntervalId = null;
        let isActive = null;
        let s = null;

        if (selectedDates[0] > Date.now()) {
             refs.start.removeAttribute('disabled');
        } else {
            Notiflix.Notify.failure("Please choose a date in the future")
        };

        refs.start.addEventListener('click', () => {
            if (isActive) {
                return;
            };

            isActive = true;

            IntervalId = setInterval(() => {
                const b = Date.now();
                s = selectedDates[0] - b
                const time = convertMs(s);
                updetTimer(time)
                if (refs.timerEl.textContent==='days 00 : hours 00 : minutes 00 : seconds 00') {
                clearInterval(IntervalId)
                };
            }, 1000);
        
        });

    }
};

flatpickr(refs.inputE, options);

function addLeadingZero(value){
    return String(value).padStart(2, '0');
};

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
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
};

function updetTimer({ days, hours, minutes, seconds }) {
    refs.timerEl.textContent = `days ${days} : hours ${hours} : minutes ${minutes} : seconds ${seconds}`
    console.log(refs.timerEl.textContent)
};