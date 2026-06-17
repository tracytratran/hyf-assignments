"use strict";

const startBtn = getElement(".start-btn");
const restartBtn = getElement(".restart-btn");
const timerEl = getElement(".timer");
const timeUpMessage = getElement(".time-up");
const errorMessage = getElement(".error-message");
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
  const timerValue = getTimerValue();
  const inputTimer = Number(timerValue);

  if (timerValue === "") {
    showErrorMessage("You shouldn't leave the input empty!");
    console.error("Empty input!");
    return;
  }

  if (isNaN(inputTimer)) {
    showErrorMessage("You should input a number in this field!");
    console.error("Input is not a number!");
    return;
  }

  if (inputTimer <= 0) {
    showErrorMessage("Please input a valid number that is greater than 0!");
    console.error("Input is negative!");
    return;
  }

  startTimer();

  document.addEventListener("keydown", logKey);
});

restartBtn.addEventListener("click", restartGame);

function restartGame() {
  stopTimer();
  resetState();
  resetUI();
  confetti.clear();
}

function startTimer() {
  if (intervalID) return;

  timer = Number(getTimerValue());
  renderElTextContent(timerEl, timer);

  intervalID = setInterval(function () {
    timer--;
    renderElTextContent(timerEl, timer);

    if (timer === 0) {
      endGame();
    }
  }, 1000);
}

function endGame() {
  stopTimer();

  const winner = getWinner(countPressL, countPressS);
  showResult(winner);

  document.removeEventListener("keydown", logKey);
}

function getTimerValue() {
  return document.getElementById("time").value;
}

function logKey(e) {
  const key = e.key.toLowerCase();
  if (key === "l") {
    countPressL += 1;
    renderElTextContent(pressL, countPressL);
  }

  if (key === "s") {
    countPressS += 1;
    renderElTextContent(pressS, countPressS);
  }
}

function getWinner(countPressL, countPressS) {
  if (countPressL > countPressS) {
    return "L";
  } else if (countPressL < countPressS) {
    return "S";
  } else return "draw";
}

// UI rendering
function renderElTextContent(el, content) {
  el.textContent = content;
}

function showErrorMessage(content) {
  errorMessage.classList.remove("hidden");
  renderElTextContent(errorMessage, content);
}

function showResult(winner) {
  const messages = {
    L: "L Presser wins!",
    S: "S Presser wins!",
    draw: "You are even!",
  };

  timeUpMessage.classList.remove("hidden");
  timeUpMessage.textContent = "Time's up! " + messages[winner];
  confettiEl.classList.remove("hidden");
  confetti.render();

  setTimeout(clearConfetti, 5000);
}

function resetUI() {
  renderElTextContent(timerEl, "");
  renderElTextContent(pressL, 0);
  renderElTextContent(pressS, 0);
  document.getElementById("time").value = "";
  errorMessage.classList.add("hidden");
  timeUpMessage.classList.add("hidden");
}

function clearConfetti() {
  confetti.clear();
  confettiEl.classList.add("hidden");
}

// Utilities
function getElement(el) {
  return document.querySelector(el);
}

function stopTimer() {
  clearInterval(intervalID);
  intervalID = null;
}

function resetState() {
  timer = 0;
  countPressL = 0;
  countPressS = 0;
}
