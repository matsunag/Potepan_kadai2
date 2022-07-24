let timer = document.getElementById('timer');
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let startTime;
let stopTime = 0;
let timeoutID;

function displayTime() {
  const d = new Date(Date.now()-startTime +stopTime);
  const h = String(d.getHours()-9).padStart(2,'0');
  const m = String(d.getMinutes()).padStart(2,'0');
  const s = String(d.getSeconds()).padStart(2,'0');
  const ms = String(d.getMilliseconds()).padStart(2,'0');
  timer.textContent = `${h}:${m}:${s}:${ms}`;
  
  timeoutID= setTimeout(displayTime, 10);
}

function setButtonStateInitial() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
}

function setButtonStateRunning() {
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
}

function setButtonStateStopped() {
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
}

setButtonStateInitial()

start.addEventListener('click', () => {
    if (start.classList.contains('inactive') === true) {
        return;
    }
    
    setButtonStateRunning();
    startTime = Date.now();
    displayTime();
});

stop.addEventListener('click', () => {
    if (stop.classList.contains('inactive') === true) {
        return;
    }
    
    setButtonStateStopped();
    clearTimeout(timeoutID);
    stopTime += Date.now() -startTime;
});

reset.addEventListener('click', () => {
    if (reset.classList.contains('inactive') === true) {
        return;
    }
    
    setButtonStateInitial();
    timer.textContent = '00:00:00:00';
    stopTime = 0;
});