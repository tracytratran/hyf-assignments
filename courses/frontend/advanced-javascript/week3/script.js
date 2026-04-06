"use strict";

const inputFrom = getElementById("amount-from");
const inputTo = getElementById("amount-to");
const currencySelectorFrom = getElementById("currency-from");
const currencySelectorTo = getElementById("currency-to");
const errorMessage = getElement(".error-message");
const retryBtn = getElement(".retry-button");

let currencyRates;
let currencyFrom;
let currencyTo;
let currencyRateFrom;
let currencyRateTo;
let lastChanged = "from";

init();

inputFrom.addEventListener("input", () => {
  if (!inputFrom.value) {
    inputTo.value = "";
    return;
  }

  inputTo.value = calcCurrencyTo();

  lastChanged = "from";
});

inputTo.addEventListener("input", () => {
  if (!inputTo.value) {
    inputFrom.value = "";
    return;
  }

  inputFrom.value = calcCurrencyFrom();

  lastChanged = "to";
});

currencySelectorFrom.addEventListener("change", () => {
  currencyFrom = currencySelectorFrom.value;
  currencyRateFrom = renderCurrencyRate(currencyRates, currencyFrom);

  updateInputValue();
});

currencySelectorTo.addEventListener("change", () => {
  currencyTo = currencySelectorTo.value;
  currencyRateTo = renderCurrencyRate(currencyRates, currencyTo);

  updateInputValue();
});

retryBtn.addEventListener("click", () => {
  errorMessage.classList.add("hidden");

  init();
});

function createEl(el) {
  return document.createElement(el);
}

function getElement(el) {
  return document.querySelector(el);
}

function getElementById(id) {
  return document.getElementById(id);
}

async function init() {
  currencySelectorFrom.innerHTML = "";
  currencySelectorTo.innerHTML = "";

  currencyFrom = "EUR";
  currencyTo = "DKK";

  currencyRates = await fetchExchangeRates();

  currencyRateFrom = renderCurrencyRate(currencyRates, currencyFrom);
  currencyRateTo = renderCurrencyRate(currencyRates, currencyTo);
}

async function fetchExchangeRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();

    renderCurrencySelector(currencySelectorFrom, data.rates);
    renderCurrencySelector(currencySelectorTo, data.rates);

    return data.rates;
  } catch (error) {
    console.error(error);

    errorMessage.classList.remove("hidden");
  }
}

function renderCurrencySelector(parentEl, obj) {
  for (const [key, value] of Object.entries(obj)) {
    const currencyOption = createEl("option");
    currencyOption.value = key;
    currencyOption.textContent = key;

    if (parentEl === currencySelectorFrom) {
      if (key === "EUR") {
        currencyOption.selected = "selected";
      }
    }

    if (parentEl === currencySelectorTo) {
      if (key === "DKK") {
        currencyOption.selected = "selected";
      }
    }

    parentEl.appendChild(currencyOption);
  }
}

function renderCurrencyRate(obj, key) {
  return obj[key];
}

function calcCurrencyTo() {
  return (Number(inputFrom.value) * currencyRateTo) / currencyRateFrom;
}

function calcCurrencyFrom() {
  return (Number(inputTo.value) * currencyRateFrom) / currencyRateTo;
}

function updateInputValue() {
  if (!inputFrom.value && !inputTo.value) return;

  if (lastChanged === "from") {
    inputTo.value = calcCurrencyTo();
  }

  if (lastChanged === "to") {
    inputFrom.value = calcCurrencyFrom();
  }
}
