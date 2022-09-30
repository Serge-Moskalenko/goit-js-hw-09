const refs = {
    start: document.querySelector('[data-start]'),
    stop: document.querySelector('[data-stop]'),
    body:document.querySelector('body')
};

refs.stop.setAttribute('disabled', '');

const colorBody = {
    interval: null,
    isActive: false,

    start() {
        if (this.isActive) {
            return;
        };
        
        this.isActive = true;

        refs.start.setAttribute('disabled', '');
        refs.stop.removeAttribute('disabled');

        this.interval = setInterval(() => {
            refs.body.style.background = getRandomHexColor();
        }, 1000);

    },

    stop() {
        
        refs.stop.setAttribute('disabled', '');
        refs.start.removeAttribute('disabled');

        clearInterval(this.interval);
        this.isActive = false;
    }

};

refs.start.addEventListener('click', () => colorBody.start());

refs.stop.addEventListener('click', () => colorBody.stop());

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

