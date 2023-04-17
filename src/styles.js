import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      padding: 0,
      margin: 0,
      fontFamily: '"Roboto Mono", monospace',
      backgroundImage:
        "linear-gradient(to bottom, rgb(114, 114, 186), rgb(170, 232, 232))",
      backgroundAttachment: "fixed",
    },
  },
  container: {
    maxWidth: 900,
    margin: "0 auto",
  },
  header: {
    color: "rgba(0, 0, 0, 0.87)",
  },
  exchangeRateHeader: {
    marginLeft: 20,
    padding: 0,
    textAlign: "center",
  },
  currencyCode: {
    background: "none",
    color: "rgba(0, 0, 0, 0.87)",
    borderColor: "rgba(0, 0, 0, 0.87)",
    borderRadius: "0.75em",
    padding: "0.25em",
    verticalAlign: "middle",
  },
  exchangeRateTable: {
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    "& th, & td": {
      borderColor: "rgba(0, 0, 0, 0.2)",
    },
  },
  exchangeRateForm: {
    textAlign: "center",
  },
  input: {
    fontSize: "2.8em",
    background: "none",
    border: "none",
    fontFamily: '"Orbitron", sans-serif',
    color: "rgba(44, 44, 44, 0.87)",
    textAlign: "center",
    maxWidth: "100%",
  },
  textField: {
    maxWidth: "200px",
  },
  tableCell: {
    paddingBottom: "1em",
    color: "rgba(0, 0, 0, 0.87)",
  },
  firstTableCell: {
    paddingRight: "2.5em",
  },
  secondTableCell: {
    paddingLeft: "2.5em",
  },
  section: {
    padding: "1em",
  },
  sectionSeparator: {
    borderTop: "1px solid rgba(50, 40, 0, 0.3)",
  },
  select: {
    minWidth: "120px",
    color: theme.palette.primary.main,
    "&:before": {
      borderColor: theme.palette.primary.main,
    },
    "&:after": {
      borderColor: theme.palette.primary.main,
    },
    "& .MuiSelect-select:focus": {
      backgroundColor: "transparent",
    },
  },
}));
