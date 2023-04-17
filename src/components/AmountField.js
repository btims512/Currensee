import React from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import { useStyles } from "../styles";
import { currencyFlags } from "./RateTable";

export function AmountField({ amount, onChange, currencyCode }) {
  const classes = useStyles();

  // Get the flag for the currency code
  const flag = currencyFlags[currencyCode];

  // Define inline styles for the flag element
  const flagStyles = { fontSize: "2.5em", paddingTop: "10px" };

  return (
    <form className={classes.exchangeRateForm}>
      <TextField
        type="text"
        value={amount}
        onChange={onChange}
        fullWidth
        margin="normal"
        className={classes.textField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span style={flagStyles}>{flag}</span>
            </InputAdornment>
          ),
          classes: { input: classes.input },
        }}
      />
    </form>
  );
}
