const start = document.getElementById('start');
const trigger = document.getElementById('trigger');
const startTrigger = document.getElementById('startTrigger');
const imgTrigger = document.getElementById('imgTrigger');
const spray = document.getElementById('spray');


const countDown = document.getElementById('countDown');
const countDownNumber = document.getElementById('countDownNumber');
const stopCountDown = document.getElementById('stopCountDown');
let time = 60;
const intervalDuration = 300;
const socket = new WebSocket("ws://192.168.1.101:8080");
socket.onopen = () => {
        console.log("Connected to the server");
      };

start.addEventListener('click', function() {
    start.classList.add('fade-out');
 
    setTimeout(() => {
        start.classList.add('d-none');
        trigger.classList.remove('d-none');
        start.classList.remove('fade-out');
    }, 1000);
});

imgTrigger.addEventListener('click', function() {
    trigger.classList.add('fade-out');
       socket.send(
            JSON.stringify({
              type: "long",
              data: "long",
            })
          );
    setTimeout(() => {
        trigger.classList.add('d-none');
        countDown.classList.remove('d-none');
        trigger.classList.remove('fade-out');
    }, intervalDuration); 

    const countdownInterval = setInterval(() => {
        time--;
        countDownNumber.innerHTML = `${time}s`;
        if (time === 0) {
            socket.send(
            JSON.stringify({
              type: "short",
              data: "short",
            })
          );
          location.reload();
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

spray.addEventListener('click', function() {
  fetch("http://192.168.1.105/?switch=1&second=5")
                        .then(response => response.text())
                        .then(data => console.log("API Response:", data))
                        .catch(error => console.error("API Error:", error));
                
});



stopCountDown.addEventListener('click', function() {
    socket.send(
            JSON.stringify({
              type: "short",
              data: "short",
            })
            );
            location.reload();
});