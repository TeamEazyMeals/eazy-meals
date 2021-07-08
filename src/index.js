import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import Global from "./components/Global/Global";
import SwDev from "./SwDev/SwDev"


ReactDOM.render(
  <Global>
    <App />
  </Global>,
  document.getElementById("root")
);

SwDev();