import { useState, useCallback, useEffect } from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { RateTable } from "./RateTable";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";
import { useStyles } from "../styles";

const supportedCurrencies = [
  "USD",
  "EUR",
  "JPY",
  "GBP",
  "AUD",
  "CAD",
  "CHF",
  "CNY",
  "SEK",
  "NZD",
  // Add more currency codes here
  "HKD",
  "SGD",
  "INR",
  "MXN",
  "PHP",
  "THB",
];

export function ExchangeRate() {
  const [amount, setAmount] = useState("1.50");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  const classes = useStyles();

  useEffect(() => {
    getExchangeRates(currencyCode, supportedCurrencies).then((rates) => {
      setCurrencyData(rates);
    });
  }, [currencyCode]);

  const handleCurrencyCode = useCallback(
    (e) => setCurrencyCode(e.target.value),
    []
  );

  const handleAmountChange = useCallback((e) => {
    let newAmount = e.target.value;
    setAmount(newAmount);
  }, []);

  return (
    <Container maxWidth="md">
      <Box my={4}>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          className={classes.exchangeRateHeader}
        >
          Exchange Rates
        </Typography>
        <CurrencyCodePicker
          supportedCurrencies={supportedCurrencies}
          currencyCode={currencyCode}
          onChange={handleCurrencyCode}
        />
        <AmountField amount={amount} onChange={handleAmountChange} />
        <RateTable currencyData={currencyData} amount={amount} />
      </Box>
    </Container>
  );
}
