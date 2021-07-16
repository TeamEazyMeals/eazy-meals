import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import Global from "./components/Global/Global";
<<<<<<< HEAD

// const swURL = `${process.env.PUBLIC_URL}/sw.js`;
// if ("serviceWorker" in navigator) {
//   navigator.serviceWorker
//     .register(swURL)
//     .then((reg) => console.log("service worker registered", reg))
//     .catch((err) => console.log("service worker NOT registered", err));
// }
=======
import SwDev from "./SwDev/SwDev";
>>>>>>> dbc74f18952cd32324f6138a01d23f5bff8d8396

ReactDOM.render(
  <Global>
    <App />
  </Global>,
  document.getElementById("root")
);

SwDev();
