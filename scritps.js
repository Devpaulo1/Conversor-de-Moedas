const convertButton = document.querySelector(".convert-button");
const fromSelect = document.querySelector(".currency-select-from");
const toSelect = document.querySelector(".currency-select-to");
const currencyValueToConvert = document.querySelector(".currency-value-to-convert");
const currencyValueConverted = document.querySelector(".currency-value");

function convertValues() {
    const inputCurrencyValue = Number(document.querySelector(".input-currency").value); //valor digitado no input
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const bitcoinToday = 350000
    const realToday = 1


    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);

    let valueInReal;

    if (fromCurrency == "real") {
        valueInReal = inputCurrencyValue;
    }
    else if (fromCurrency == "dolar") {
        valueInReal = inputCurrencyValue * dolarToday;
    }
    else if (fromCurrency == "euro") {
        valueInReal = inputCurrencyValue * euroToday;
    }
    else if (fromCurrency == "libra") {
        valueInReal = inputCurrencyValue * libraToday;
    }
    else if (fromCurrency == "bitcoin") {
        valueInReal = inputCurrencyValue * bitcoinToday;
    }

    let finalValue;

    if (toCurrency == "real") {
        finalValue = valueInReal;
    }
    else if (toCurrency == "dolar") {
        finalValue = valueInReal / dolarToday;
    }
    else if (toCurrency == "euro") {
        finalValue = valueInReal / euroToday;
    }
    else if (toCurrency == "libra") {
        finalValue = valueInReal / libraToday;
    }
    else if (toCurrency == "bitcoin") {
        finalValue = valueInReal / bitcoinToday;
    }

    if (toCurrency == "bitcoin") {
        currencyValueConverted.innerHTML = finalValue.toFixed(8) + " BTC";
    }
    else if (toCurrency == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(finalValue);
    } else if (toCurrency == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(finalValue);
    } else if (toCurrency == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(finalValue);
    } else if (toCurrency == "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(finalValue);
    }
}


function changeCurrencyTo() {
    const currencyName = document.getElementById("currency-name-to");
    const currencyImage = document.querySelector(".currency-img-to");

    if (toSelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano";
        currencyImage.src = "./assets/dolar.png";

    }
    else if (toSelect.value == "euro") {
        currencyName.innerHTML = "Euro";
        currencyImage.src = "./assets/euro.png";
    }

    else if (toSelect.value == "libra") {
        currencyName.innerHTML = "Libra";
        currencyImage.src = "./assets/libra.png";
    }

    else if (toSelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin";
        currencyImage.src = "./assets/bitcoin.png";
    }

    else if (toSelect.value == "real") {
        currencyName.innerHTML = "Real";
        currencyImage.src = "./assets/real.png";
    }

    convertValues();
}


function changeCurrencyFrom() {
    const currencyNameFrom = document.getElementById("currency-name-from");
    const currencyImageFrom = document.querySelector(".currency-img-from");

    if (fromSelect.value == "dolar") {
        currencyNameFrom.innerHTML = "Dólar Americano";
        currencyImageFrom.src = "./assets/dolar.png";
    }
    else if (fromSelect.value == "euro") {
        currencyNameFrom.innerHTML = "Euro";
        currencyImageFrom.src = "./assets/euro.png";
    }
    else if (fromSelect.value == "libra") {
        currencyNameFrom.innerHTML = "Libra";
        currencyImageFrom.src = "./assets/libra.png";
    }
    else if (fromSelect.value == "bitcoin") {
        currencyNameFrom.innerHTML = "Bitcoin";
        currencyImageFrom.src = "./assets/bitcoin.png";
    }
    else if (fromSelect.value == "real") {
        currencyNameFrom.innerHTML = "Real";
        currencyImageFrom.src = "./assets/real.png";
    }
    convertValues();
}
fromSelect.addEventListener("change", changeCurrencyFrom);
toSelect.addEventListener("change", changeCurrencyTo);
convertButton.addEventListener("click", convertValues);