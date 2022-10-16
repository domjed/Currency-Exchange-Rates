import axios from "axios";

import { POPULAR_SYMBOLS, DECIMAL_PLACES } from "@shared/Constants";

export const getSymbols = async (shouldFetchAllSymbols) => {
  /** Get currency symbols in order to allow user to choose apropriate exchange currency rates */

  const url = `https://api.exchangerate.host/symbols`;
  const params = {};
  try {
    const response = await axios
      .get(url, params)
      .then((data) => {
        const symbols = Object.values(data.data.symbols);
        let currenciesList = [];
        for (
          let iCurrency = 0;
          iCurrency < symbols.length;
          iCurrency++
        ) {
          if (shouldFetchAllSymbols || POPULAR_SYMBOLS.includes(symbols[iCurrency].code)) {
            currenciesList.push({
              value: symbols[iCurrency].code,
              label:
                symbols[iCurrency].code +
                ": " +
                symbols[iCurrency].description,
              description:
                symbols[iCurrency].description
            });
          }
        } return currenciesList
      }
      )
      .catch((err) => {
        console.log(err);
        let currenciesList = [];
        return currenciesList
      });
    return response
  } catch (err) {
    console.log(err);
    let currenciesList = [];
    return currenciesList
  }
};

export const checkLatestRates = async (data, symbolsToCheck) => {
  /** Get data about the most recent exchange rates */

  let exchangeFromCurrency = data.baseCurrency.value;
  const url = `https://api.exchangerate.host/latest`;
  const params = {
    base: exchangeFromCurrency,
    amount: data.baseCurrencyValue,
    symbols: symbolsToCheck,
    places: DECIMAL_PLACES
  };
  try {
    const response = await axios
      .get(url, { params })
      .then((data) => {
        return Object.entries(data.data.rates)
      }
      )
      .catch((err) => {
        console.log(err);
        let response = [];
        return response;
      });
    return response
  } catch (err) {
    console.log(err);
    let currenciesList = [];
    return currenciesList
  }
}

export const checkHistoricalRates = async (data) => {
  /** Get historical data about exchange rates from given period */

  const daysToSubstract = data.timespan.value;
  let start_date = new Date();
  let end_date = new Date();
  start_date.setDate(end_date.getDate() - daysToSubstract);
  start_date = start_date.toISOString().split('T')[0]
  end_date = end_date.toISOString().split('T')[0]

  let exchangeFromCurrency = data.baseCurrency.value;
  let symbolToCheck = data.currencyToCompare.value;
  let url = `https://api.exchangerate.host/timeseries?start_date=${start_date}&end_date=${end_date}`;
  let params = { base: exchangeFromCurrency, symbols: symbolToCheck };

  try {
    const response = await axios
      .get(url, { params })
      .then((data) => { return Object.entries(data.data.rates) })
      .then((data) => {
        const ratesReceived = [];
        for (let iData = 0; iData < data.length; iData++) {
          ratesReceived.push({ x: Object.values(data[iData][1]), y: new Date(data[iData][0]) })
        }
        return ratesReceived;
      })
      .catch((err) => {
        console.log(err);
        let ratesReceived = [];
        return ratesReceived;
      }
      );
    return response
  } catch (err) {
    console.log(err);
    let currenciesList = [];
    return currenciesList
  }
}