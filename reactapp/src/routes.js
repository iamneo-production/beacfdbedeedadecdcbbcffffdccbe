// Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/Auth/Register/Register";
import Homepage from "./components/Customer/Homepage";// Import your Homepage component

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route path="/homepage" component={Homepage} />
      </Switch>
    </Router>
  );
}

export default Routes;
