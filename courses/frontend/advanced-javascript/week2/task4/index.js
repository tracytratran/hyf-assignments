"use strict";

const startBtn = getElement(".start-btn");
const restartBtn = getElement(".restart-btn");
const timerEl = getElement(".timer");
const timeUpMessage = getElement(".time-up");
const pressS = getElement("#s");
const pressL = getElement("#l");
const confettiEl = getElement("#confetti");
const confettiSettings = { target: confettiEl };
const confetti = new ConfettiGenerator(confettiSettings);

let timer = 0;
let intervalID;
let countPressL = 0;
let countPressS = 0;

startBtn.addEventListener("click", () => {
  if (document.getElementById("time").value === "") {
    document.removeEventListener("keydown", logKey);
    return;
  }

  startTimer();

  document.addEventListener("keydown", logKey);
});

restartBtn.addEventListener("click", restartGame);

function getElement(el) {
  return document.querySelector(el);
}

function restartGame() {
  stopTimer();
  confetti.clear();

  timer = 0;
  timerEl.textContent = "";

  document.getElementById("time").value = "";

  countPressL = 0;
  pressL.textContent = countPressL;

  countPressS = 0;
  pressS.textContent = countPressS;

  timeUpMessage.classList.add("hidden");
}

function updateTimerEl() {
  timer = Number(document.getElementById("time").value);
  timerEl.textContent = timer;
}

function startTimer() {
  if (intervalID) return;

  updateTimerEl();

  intervalID = setInterval(function () {
    timer--;
    timerEl.textContent = timer;

    if (timer === 0) {
      stopTimer();
      updateResultMessage();
      confetti.render();

      document.removeEventListener("keydown", logKey);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalID);
  intervalID = null;
}

function logKey(e) {
  if (e.key === "l") {
    countPressL += 1;
    pressL.textContent = countPressL;
  }

  if (e.key === "s") {
    countPressS += 1;
    pressS.textContent = countPressS;
  }
}

function updateResultMessage() {
  timeUpMessage.classList.remove("hidden");
  timeUpMessage.textContent = "Time's up!";

  if (countPressL > countPressS) {
    timeUpMessage.textContent += " L Presser wins!";
  } else if (countPressL < countPressS) {
    timeUpMessage.textContent += " S Presser wins!";
  } else timeUpMessage.textContent += " You are even!";

  confettiEl.classList.remove("hidden");

  setTimeout(clearConfetti, 5000);
}

function clearConfetti() {
  confetti.clear();
  confettiEl.classList.add("hidden");
}
