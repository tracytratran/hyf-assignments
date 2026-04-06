"use strict";
const currencySelectorFrom = getElement("#currency-from");
const currencySelectorTo = getElement("#currency-to");

function getElement(el) {
  return document.querySelector(el);
}

function createEl(el) {
  return document.createElement(el);
}

async function fetchExchangeRates() {
  try {
    const response = await fetch("https://open.er-api.com/v6/latest/USD");
    const data = await response.json();

    renderCurrencySelector(currencySelectorFrom, data.rates);
    renderCurrencySelector(currencySelectorTo, data.rates);
  } catch (error) {
    console.error(error);
    // Then show error message to user
  }
}

await fetchExchangeRates();

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
