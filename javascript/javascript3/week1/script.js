let currencyRatesArray = []; // Global variable to store currency rates

function getData() {
  return fetch(
    "https://raw.githubusercontent.com/besart-elezi/besart-elezi.github.io/refs/heads/main/api/currency_converter.json"
  )
    .then(response => response.json())
    .then(myData => {
      console.log("DATA", myData);

      // Assign fetched data to currencyRatesArray
      currencyRatesArray = myData || [];

      // Update the UI with new data
      updateRatesList();
    })
    .catch(error => console.error("Error fetching data:", error));
}

function addCurrencyRate(baseCurrency, newCurrency, rate) {
  if (!baseCurrency || !newCurrency || isNaN(rate)) {
    alert("Missing values! Please enter all fields.");
    return;
  }

  baseCurrency = baseCurrency.toUpperCase();
  newCurrency = newCurrency.toUpperCase();
  rate = Number(rate.toFixed(4));

  let existingRateObject = currencyRatesArray.find(rateObj => rateObj.base === baseCurrency);

  if (existingRateObject) {
    if (!existingRateObject.rates[newCurrency]) {
      existingRateObject.rates[newCurrency] = rate;
      alert(`Added new rate: 1 ${baseCurrency} = ${rate} ${newCurrency}`);
    } else {
      alert("Currency already exists!");
    }
  } else {
    let newRateObject = {
      "timestamp": Date.now(),
      "base": baseCurrency,
      "date": new Date().toISOString().split('T')[0],
      "rates": {
        [newCurrency]: rate
      }
    };
    currencyRatesArray.push(newRateObject);
    alert(`Created new rate set for ${baseCurrency}: 1 ${baseCurrency} = ${rate} ${newCurrency}`);
  }

  updateRatesList();
}

function updateRatesList() {
  let list = document.getElementById("currency-list");
  if (!list) return;
  list.innerHTML = "";

  currencyRatesArray.forEach(rateObj => {
    let baseCurrency = rateObj.base;
    let timestamp = rateObj.timestamp;
    let date = rateObj.date;

    for (let currency in rateObj.rates) {
      let item = document.createElement("li");
      item.textContent = `${baseCurrency} → ${currency}: ${rateObj.rates[currency]} Timestamp: ${timestamp} Date: ${date}    `;
      list.appendChild(item);
    }
  });
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
  if (!resultDisplay) return;

  resultDisplay.textContent = foundRate
    ? `Exchange Rate from ${fromCurrency} to ${toCurrency}: ${foundRate}`
    : "Currency rate not found.";
}

document.addEventListener("DOMContentLoaded", () => {
  console.log('loaded')

  getData().then(() => {
    let form = document.getElementById("add-currency-form");
    if (form) {
      form.addEventListener("submit", function (event) {
        event.preventDefault();
        let baseCurrency = document.getElementById("base-currency").value.toUpperCase();
        let currency = document.getElementById("currency").value.toUpperCase();
        let rate = parseFloat(document.getElementById("rate").value);
        addCurrencyRate(baseCurrency, currency, rate);
      });
    }

    // Add event listener for search button
    let searchButton = document.getElementById("search-button");
    if (searchButton) {
      searchButton.addEventListener("click", searchRate);
    }

    // Immediately check the market status when the page loads
    checkMarketStatus();

    updateRatesList();
  });
});

function getTimeUntil(hour, minute = 0) {
  const now = new Date();
  const target = new Date();
  target.setHours(hour, minute, 0, 0);

  if (now >= target) {
    target.setDate(target.getDate() + 1);
  }

  return target - now;
}

//Week 3 requirement: Implement a timeout to show an announcement when the market open or/and close. The market opens at 9AM and closes at 5PM local time.
function checkMarketStatus() {
  console.log('Periodic checking of market status')
  let status = "Market status: "
  const now = new Date();
  const hour = now.getHours();
  status += (hour >= 9 && hour < 17 ? "open" : "closed");

  const statusElement = document.getElementById("market-status");
  if (statusElement) {
    statusElement.innerText = status;
  }

  return status;
}

// Call checkMarketStatus every minute automatically
setInterval(checkMarketStatus, 60 * 1000);



