let currencyRatesArray = [
  {
    "timestamp": Date.now(),
    "base": "EUR",
    "date": new Date().toISOString().split('T')[0],
    "rates": {
      "USD": 1.1,
      "GBP": 0.85
    }
  },
  {
    "timestamp": Date.now(),
    "base": "USD",
    "date": new Date().toISOString().split('T')[0],
    "rates": {
      "EUR": 0.91,
      "JPY": 115.5,
    }
  }
];

function addCurrencyRate(baseCurrency, newCurrency, rate) {
  if (!baseCurrency || !newCurrency || !rate) {
    alert("Missing values! Please enter all fields.");
    return;
  }

  baseCurrency = baseCurrency.toUpperCase();
  newCurrency = newCurrency.toUpperCase();

  // Find if the base currency already exists in the array
  let existingRateObject = currencyRatesArray.find(rateObj => rateObj.base === baseCurrency);

  if (existingRateObject) {
    // If the base currency exists, add or update the rate
    if (!existingRateObject.rates[newCurrency]) {
      existingRateObject.rates[newCurrency] = parseFloat(rate.toFixed(4));
      alert(`Added new rate: 1 ${baseCurrency} = ${rate} ${newCurrency}`);
    } else {
      alert("Currency already exists!");
    }
  } else {
    // If the base currency does not exist, create a new object
    let newRateObject = {
      "timestamp": Date.now(),
      "base": baseCurrency,
      "date": new Date().toISOString().split('T')[0],
      "rates": {
        [newCurrency]: parseFloat(rate.toFixed(4))
      }
    };
    currencyRatesArray.push(newRateObject);
    alert(`Created new rate set for ${baseCurrency}: 1 ${baseCurrency} = ${rate} ${newCurrency}`);
  }
  updateRatesList();
}

function updateRatesList() {
  let list = document.getElementById("currency-list");
  list.innerHTML = "";

  currencyRatesArray.forEach(rateObj => {
    let baseCurrency = rateObj.base;

    for (let currency in rateObj.rates) {
      let item = document.createElement("li");
      item.textContent = `${baseCurrency} → ${currency}: ${rateObj.rates[currency]}`;
      list.appendChild(item);
    }
  })
}

function searchRate() {
  let fromCurrency = document.getElementById("search-from").value.toUpperCase();
  let toCurrency = document.getElementById("search-to").value.toUpperCase();

  let foundRate = null;

  currencyRatesArray.forEach(rateObj => {
    if (rateObj.base === fromCurrency && rateObj.rates[toCurrency]) {
      foundRate = rateObj.rates[toCurrency];
    }
  });

  let resultDisplay = document.getElementById("search-result");

  if (foundRate) {
    resultDisplay.textContent = `Exchange Rate from ${fromCurrency} to ${toCurrency}: ${foundRate}`;
  } else {
    resultDisplay.textContent = "Currency rate not found.";
  }
}

document.getElementById("add-currency-form").addEventListener("submit", function (event) {
  event.preventDefault();

  let baseCurrency = document.getElementById("base-currency").value.toUpperCase();
  let currency = document.getElementById("currency").value.toUpperCase();
  let rate = parseFloat(document.getElementById("rate").value);
  addCurrencyRate(baseCurrency, currency, rate);
}
);



updateRatesList();