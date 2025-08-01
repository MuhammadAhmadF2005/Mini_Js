let secondsElapsed = 0;
let interval = null;
const time = document.getElementById("time");
const hand = document.getElementById("hand");
const lapsContainer = document.getElementById("laps");
let lapCount = 1;

function padStart(value) {
    return String(value).padStart(2, "0");
}

function setTime() {
    const seconds = secondsElapsed % 60;
    const minutes = Math.floor(secondsElapsed / 60);
    time.innerHTML = `${padStart(minutes)}:${padStart(seconds)}`;

    // Rotate hand like analog second hand (6° per second)
    const angle = (secondsElapsed % 60) * 6;
    hand.style.transform = `rotate(${angle}deg)`;
}

function timer() {
    secondsElapsed++;
    setTime();
}

function startClock() {
    if (interval) stopClock();
    interval = setInterval(timer, 1000);
}

function stopClock() {
    clearInterval(interval);
    interval = null;
}

function resetClock() {
    stopClock();
    secondsElapsed = 0;
    setTime();
    lapsContainer.innerHTML = "";
    lapCount = 1;
}

function lapTime() {
    const seconds = secondsElapsed % 60;
    const minutes = Math.floor(secondsElapsed / 60);
    const lapText = `Lap ${lapCount++}: ${padStart(minutes)}:${padStart(seconds)}`;
    const p = document.createElement("p");
    p.textContent = lapText;
    lapsContainer.prepend(p); // newest lap on top
}

// Initialize
setTime();
