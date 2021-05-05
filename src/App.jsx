import React, { useState, useEffect } from "react";
import GoTrue from "gotrue-js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/FirstPage/Home";
import LoginAccount from "./components/CreateAccount/CreateAccount";
import CreateAccount from "./components/LoginAccount/LoginAccount";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Create/">
          <CreateAccount />
        </Route>
        <Route path="/Login/">
          <LoginAccount />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
