let currencyRates = {
  "timestamp": Date.now(),
  "base": "EUR",
  "date": new Date().toISOString().split('T')[0],
  "rates": {
    "EUR": 1
  }
};

function addCurrencyRate(currency, rate) {
  if (!currency || !rate) {
    alert("No currency or rate given!");
  } else {
    if (!currencyRates.rates[currency]) {
      currencyRates.rates[currency] = parseFloat(rate.toFixed(4));
      currencyRates.timestamp = Date.now();
      currencyRates.date = new Date().toISOString().split('T')[0];
      updateRatesList();
    } else {
      alert("Currency already exists!");
    }
  }
}

function updateRatesList() {
  let list = document.getElementById("currency-list");
  list.innerHTML = "";
  for (let currency in currencyRates.rates) {
    let item = document.createElement("li");
    item.textContent = `${currency}: ${currencyRates.rates[currency]}`;
    list.appendChild(item);
  }
}

document.getElementById("add-currency-form").addEventListener("submit", function (event) {
  event.preventDefault();
  let currency = document.getElementById("currency").value.toUpperCase();
  let rate = parseFloat(document.getElementById("rate").value);
  addCurrencyRate(currency, rate);
}
);

updateRatesList();