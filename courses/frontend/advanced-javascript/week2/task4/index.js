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
  if (document.getElementById("time").value === "") {
    document.removeEventListener("keydown", logKey);
    errorMessage.classList.remove("hidden");
    errorMessage.textContent =
      "Please set the time to be able to start the game!";
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

  timer = getTimerValue();
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
  return Number(document.getElementById("time").value);
}

function logKey(e) {
  if (e.key === "l") {
    countPressL += 1;
    renderElTextContent(pressL, countPressL);
  }

  if (e.key === "s") {
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
