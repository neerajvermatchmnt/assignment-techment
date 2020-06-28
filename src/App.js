import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryLookup from "./countryLookup";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={CountryLookup}></Route>
      </Switch>
    </Router>
  );
}

export default App;
