import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import Global from "./components/Global/Global";

ReactDOM.render(
  <Global>
    <App />
  </Global>,
  document.getElementById("root")
);

// const registerSw = async () => {

//   try {
    
//     if (
//       process.env.NODE_ENV ||
//       process.env.NODE_ENV === "development" &&
//       "serviceWorker" in navigator
//     ) {
//       await window.navigator.serviceWorker.register("/service-worker.js");
//       console.log("service worker registered");
//     }
//   } catch (error) {
//     console.error(error, "error mesage");
//   }
// };

// registerSw();
 

