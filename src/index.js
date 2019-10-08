import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import { purple, indigo } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: {
      main: indigo[500],
      light: indigo[200],
      dark: indigo[800]
    },
    type: "light"
  }
});

console.log(theme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
