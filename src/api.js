import { fetch } from "./lib/fetch";
import { config } from "./config";

export function getExchangeRates(base, supportedCurrencies) {
  const apiKey = config.apiKey;
  const symbols = supportedCurrencies
    .filter((symbol) => symbol !== base)
    .join();
  const url = `https://api.exchangeratesapi.io/v1/latest?access_key=${apiKey}&base=${base}&symbols=${symbols}`;
  return fetch(url)
    .then((res) => res.json())
    .then(handleAPIErrors)
    .then((res) => res.rates);
}

function handleAPIErrors(res) {
  if (res.success !== false) return res;
  console.error(`Server Error: ${res.error.info}`);
  return {
    rates: {
      USD: 1.0,
    },
  };
}
