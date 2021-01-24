import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Roboto', sans-serif",

    body1: {
      fontSize: 18,
      fontWeight: 600,
    },
    body2: {
      fontSize: 16,
    },
  },
  palette: {
    primary: {
      main: "#7FAAE4",
    },
    secondary: {
      main: "#834DB7",
    },
    info: {
      main: "#34283F",
    },
  },
});

export default theme;
