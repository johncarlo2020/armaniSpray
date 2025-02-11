const start = document.getElementById('start');
const trigger = document.getElementById('trigger');
const startTrigger = document.getElementById('startTrigger');
const countDown = document.getElementById('countDown');
const countDownNumber = document.getElementById('countDownNumber');
const stopCountDown = document.getElementById('stopCountDown');
let time = 60;
const intervalDuration = 300;

start.addEventListener('click', function() {
    start.classList.add('fade-out');
    setTimeout(() => {
        start.classList.add('d-none');
        trigger.classList.remove('d-none');
        start.classList.remove('fade-out');
    }, 1000);
});

trigger.addEventListener('click', function() {
    trigger.classList.add('fade-out');
    setTimeout(() => {
        trigger.classList.add('d-none');
        countDown.classList.remove('d-none');
        trigger.classList.remove('fade-out');
    }, intervalDuration); 

    const countdownInterval = setInterval(() => {
        time--;
        countDownNumber.innerHTML = `${time}s`;
        if (time === 0) {
            clearInterval(countdownInterval);
        }
    }, 1000);

    setTimeout(() => {
        countDown.classList.add('fade-out');
        setTimeout(() => {
            countDown.classList.add('d-none');
            startTrigger.classList.remove('d-none');
            countDown.classList.remove('fade-out');
            time = 60;
        }, intervalDuration);
    }, 60000);
});

stopCountDown.addEventListener('click', function() {
    startTrigger.classList.add('fade-out');
    setTimeout(() => {
        countDown.classList.add('d-none');
        startTrigger.classList.add('d-none');
        start.classList.remove('d-none');
        startTrigger.classList.remove('fade-out');
        time = 60;
    }, intervalDuration);
});