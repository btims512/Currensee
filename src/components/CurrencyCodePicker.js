import React from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import { useStyles } from '../styles';

export function CurrencyCodePicker({ supportedCurrencies, currencyCode, onChange }) {
  const classes = useStyles();

  return (
    <FormControl>
      <InputLabel id="base-currency-label">Base Currency</InputLabel>
      <Select
        labelId="base-currency-label"
        value={currencyCode}
        onChange={onChange}
        className={classes.select}
      >
        {supportedCurrencies.map((code) => (
          <MenuItem key={code} value={code}>
            {code}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
