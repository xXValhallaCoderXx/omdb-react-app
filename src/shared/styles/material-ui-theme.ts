import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  typography: {
    fontFamily: ['"Roboto"'].join(","),
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
