import { useState, useCallback, useEffect } from "react";
import { Container, Typography, Box } from "@material-ui/core";
import { CurrencyCodePicker } from "./CurrencyCodePicker";
import { AmountField } from "./AmountField";
import { getExchangeRates } from "../api";
import { RateTable } from "./RateTable";
import { useStyles } from "../styles";

const supportedCurrencies = ["USD", "EUR", "JPY", "GBP", "CAD", "MXN"];

export function ExchangeRate() {
  const [amount, setAmount] = useState("1.50");
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [currencyData, setCurrencyData] = useState({ USD: 1.0 });

  const classes = useStyles();

  useEffect(() => {
    getExchangeRates("EUR", supportedCurrencies).then((rates) => {
      const conversionRate = 1 / rates[currencyCode];

      const convertedRates = Object.fromEntries(
        Object.entries(rates).map(([code, rate]) => [
          code,
          rate * conversionRate,
        ])
      );

      convertedRates[currencyCode] = 1.0;

      setCurrencyData(convertedRates);
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
        <AmountField
          amount={amount}
          onChange={handleAmountChange}
          currencyCode={currencyCode}
        />

        <RateTable currencyData={currencyData} amount={amount} />
      </Box>
    </Container>
  );
}
