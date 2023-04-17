import { fetch } from "./lib/fetch";

export function getExchangeRates(base, supportedCurrencies) {
  const symbols = supportedCurrencies
    .filter((symbol) => symbol !== base)
    .join();
  const url = `http://api.exchangeratesapi.io/latest?base=${base}&symbols=${symbols}`;
  return fetch(url)
    .then((res) => res.json())
    .then(handleAPIErrors)
    .then((res) => res.rates);
}

function handleAPIErrors(res) {
  if (res.success) return res;
  console.error(`Server Error: ${res.error.info}`);
  return {
    rates: {
      USD: 1.0,
    },
  };
}
