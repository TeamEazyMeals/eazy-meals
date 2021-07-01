import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import Global from "./components/Global/Global";
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
  <Global>
    <App />
  </Global>,
  document.getElementById("root")
);


// serviceWorker.register();

