import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core";

const currencyFlags = {
  USD: "🇺🇸",
  EUR: "🇪🇺",
  JPY: "🇯🇵",
  GBP: "🇬🇧",
  AUD: "🇦🇺",
  CAD: "🇨🇦",
  CHF: "🇨🇭",
  CNY: "🇨🇳",
  SEK: "🇸🇪",
  NZD: "🇳🇿",
  HKD: "🇭🇰",
  SGD: "🇸🇬",
  INR: "🇮🇳",
  MXN: "🇲🇽",
  PHP: "🇵🇭",
  THB: "🇹🇭",
};

export function RateTable({ currencyData, amount }) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Currency Code</TableCell>
          <TableCell>Exchange Amount</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Object.entries(currencyData).map(([code, rate]) => {
          const exchangeAmount = amount * rate || 0.0;
          return (
            <TableRow key={code}>
              <TableCell>
                <span style={{ paddingRight: "10px" }}>
                  {currencyFlags[code]}
                </span>
                <span>{code}</span>
              </TableCell>
              <TableCell>
                {exchangeAmount.toLocaleString("en", {
                  style: "currency",
                  currency: code,
                })}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export { currencyFlags };
