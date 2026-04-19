"use strict";

const inputFrom = document.getElementById("amount-from");
const inputTo = document.getElementById("amount-to");
const currencySelectorFrom = document.getElementById("currency-from");
const currencySelectorTo = document.getElementById("currency-to");
const errorMessage = document.querySelector(".error-message");
const retryBtn = document.querySelector(".retry-button");

let currencyRates;
let currencyFrom;
let currencyTo;
let currencyRateFrom;
let currencyRateTo;

init();

inputFrom.addEventListener("input", (event) =>
  updateInputValue(event.target.value, inputTo, calcCurrencyTo),
);

inputTo.addEventListener("input", (event) =>
  updateInputValue(event.target.value, inputFrom, calcCurrencyFrom),
);

currencySelectorFrom.addEventListener("change", () => {
  currencyFrom = currencySelectorFrom.value;
  currencyRateFrom = currencyRates[currencyFrom];

  if (!inputFrom.value && !inputTo.value) return;
  inputTo.value = calcCurrencyTo();
});

currencySelectorTo.addEventListener("change", () => {
  currencyTo = currencySelectorTo.value;
  currencyRateTo = currencyRates[currencyTo];

  if (!inputFrom.value && !inputTo.value) return;
  inputFrom.value = calcCurrencyFrom();
});

retryBtn.addEventListener("click", () => {
  errorMessage.classList.add("hidden");

  init();
});

async function init() {
  currencySelectorFrom.innerHTML = "";
  currencySelectorTo.innerHTML = "";

  currencyFrom = "EUR";
  currencyTo = "DKK";

  currencyRates = await fetchExchangeRates();

  currencyRateFrom = currencyRates[currencyFrom];
  currencyRateTo = currencyRates[currencyTo];
}

async function fetchExchangeRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const data = await response.json();

    renderCurrencySelector(currencySelectorFrom, data.rates, "EUR");
    renderCurrencySelector(currencySelectorTo, data.rates, "DKK");

    return data.rates;
  } catch (error) {
    console.error(error);

    errorMessage.classList.remove("hidden");
  }
}

function renderCurrencySelector(parentEl, rates, defaultValue) {
  for (const key of Object.keys(rates)) {
    const currencyOption = document.createElement("option");
    currencyOption.value = key;
    currencyOption.textContent = key;

    if (key === defaultValue) {
      currencyOption.selected = "selected";
    }

    parentEl.appendChild(currencyOption);
  }
}

function calcCurrencyTo() {
  return (Number(inputFrom.value) * currencyRateTo) / currencyRateFrom;
}

function calcCurrencyFrom() {
  return (Number(inputTo.value) * currencyRateFrom) / currencyRateTo;
}

function updateInputValue(currentInputValue, inputToUpdate, calcFunction) {
  if (!currentInputValue) {
    inputToUpdate.value = "";
    return;
  }

  inputToUpdate.value = calcFunction();
}
