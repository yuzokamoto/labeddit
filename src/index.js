import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { GlobalStyled } from "./stylesGlobal";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyled />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
