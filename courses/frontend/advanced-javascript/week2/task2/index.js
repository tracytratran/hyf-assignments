"use strict";

const textDisplayedAfter2500ms = getElement(".display-after-2500ms");
const textDisplayedAfterDelay = getElement(".display-after-delay");
const textDisplayedAfterDelayBtn = getElement(".display-after-delay-btn");
const planetLog = getElement(".planet");
const latitudeLog = getElement(".latitude");
const longitudeLog = getElement(".longitude");
const positionLogBtn = getElement(".location-btn");
const runAfterDelayBtn = getElement(".run-after-delay-btn");
const textRunAfterDelay = getElement(".run-after-delay");
const textDisplayedIfDoubleClick = getElement(".double-click");
const jokeText = getElement(".joke");

function getElement(el) {
  return document.querySelector(el);
}

function displayTextAfter2500ms() {
  textDisplayedAfter2500ms.textContent = "Loading...";
  setTimeout(
    () => (textDisplayedAfter2500ms.textContent = "Called after 2.5 seconds"),
    2500,
  );
}

displayTextAfter2500ms();

function displayTextAfterDelay(delay, stringToLog) {
  textDisplayedAfterDelay.textContent = "Loading...";

  const millisecondsInASecond = 1000;
  const delayedTimeInMilliseconds = delay * millisecondsInASecond;
  setTimeout(
    () => (textDisplayedAfterDelay.textContent = stringToLog),
    delayedTimeInMilliseconds,
  );
}

displayTextAfterDelay(3, "This string logged after 3 seconds.");
displayTextAfterDelay(5, "This string logged after 5 seconds.");

textDisplayedAfterDelayBtn.addEventListener("click", () =>
  displayTextAfterDelay(5, "Called after 5 seconds"),
);

const earthLogger = () => (planetLog.textContent = "Earth");
const saturnLogger = () => (planetLog.textContent = "Saturn");

function planetLogFunction(planetLog) {
  return planetLog();
}

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

function success(position) {
  const currentCoords = position.coords;

  latitudeLog.textContent = `The latitude is ${currentCoords.latitude}.`;
  longitudeLog.textContent = `The longitude is ${currentCoords.longitude}.`;
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

positionLogBtn.addEventListener("click", () =>
  navigator.geolocation.getCurrentPosition(success, error),
);

function runAfterDelay(delay, callback) {
  const millisecondsInASecond = 1000;
  const delayedTimeInMilliseconds = delay * millisecondsInASecond;

  setTimeout(callback, delayedTimeInMilliseconds);
}

runAfterDelayBtn.addEventListener("click", () => {
  const delay = document.getElementById("delay").value;
  runAfterDelay(
    delay,
    () =>
      (textRunAfterDelay.textContent = `This text is logged after ${delay} second${delay > 1 ? "s" : ""}.`),
  );
});

document.addEventListener("dblclick", () => {
  textDisplayedIfDoubleClick.textContent = "Double click!";
});

function jokeCreator(shouldTellFunnyJoke, logFunnyJoke, logBadJoke) {
  shouldTellFunnyJoke ? logFunnyJoke() : logBadJoke();
}

function jokeLogger(joke) {
  jokeText.textContent = joke;
}

jokeCreator(
  true,
  () =>
    jokeLogger(
      "I'm reading a book on anti-gravity, and it's impossible to put down.",
    ),
  () => jokeLogger("I only know 25 letters of the alphabet, I don't know why."),
);
