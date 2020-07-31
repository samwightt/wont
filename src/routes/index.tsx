import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import privateRoutes from "./private";

const Routes = () => (
  <Router>
    <Switch>
      {privateRoutes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  </Router>
);

export default Routes;
