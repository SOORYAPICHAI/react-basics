import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routers from "router";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>
          <Routers />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
