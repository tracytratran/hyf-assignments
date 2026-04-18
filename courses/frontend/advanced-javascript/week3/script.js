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

init();

inputFrom.addEventListener("input", ({ target }) =>
  onAmountChanged(target, inputTo, currencySelectorTo, currencySelectorFrom),
);

inputTo.addEventListener("input", ({ target }) =>
  onAmountChanged(target, inputFrom, currencySelectorFrom, currencySelectorTo),
);

currencySelectorFrom.addEventListener("change", ({ target }) => {
  currencyFrom = target.value;

  onSelectorChanged(target, currencySelectorTo, inputFrom, inputTo);
});

currencySelectorTo.addEventListener("change", ({ target }) => {
  currencyTo = target.value;

  onSelectorChanged(target, currencySelectorFrom, inputTo, inputFrom);
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

function onAmountChanged(
  changedInput,
  inputToUpdate,
  selectorToUpdate,
  selectorChanged,
) {
  if (!changedInput.value) {
    inputToUpdate.value = "";
    return;
  }

  inputToUpdate.value =
    (Number(changedInput.value) * currencyRates[selectorToUpdate.value]) /
    currencyRates[selectorChanged.value];
}

function onSelectorChanged(
  changedSelector,
  selectorToUpdate,
  baseInput,
  inputToUpdate,
) {
  if (!baseInput.value && !inputToUpdate.value) return;
  inputToUpdate.value =
    (Number(baseInput.value) * currencyRates[selectorToUpdate.value]) /
    currencyRates[changedSelector.value];
}
