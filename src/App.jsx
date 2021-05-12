
import React, { useState, useEffect } from "react";
import GoTrue from "gotrue-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/FirstPage/Home";
import LoginAccount from "./components/LoginAccount/LoginAccount";
import CreateAccount from "./components/CreateAccount/CreateAccount";

const App = () => {
  return (
    <Router>
      <Switch>
      <Route path="/Login/">
          <LoginAccount />
        </Route>
        <Route path="/Create/">
          <CreateAccount />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
