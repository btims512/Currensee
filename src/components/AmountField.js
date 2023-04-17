import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "../styles";

export function AmountField({ amount, onChange }) {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className={classes.exchangeRateForm} onSubmit={handleSubmit}>
      <TextField
        label="Amount in base currency"
        type="text"
        value={amount}
        onChange={onChange}
        fullWidth
        margin="normal"
        className={classes.textField}
        InputProps={{ classes: { input: classes.input } }}
      />
    </form>
  );
}

export function HandleReset() {
  Array.from(document.querySelectorAll("input"));
  this.setState({
    itemvalues: [{}],
  });
}
