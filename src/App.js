import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Importing Pages
import PageStructure from "./PageStructure";
import Dashboard from "./screens/Dashboard";
import InternShip from "./screens/InternShip";
import Skills from "./screens/Skills";

// Importing styles
import "./styles/PageStructure/styles.scss";
import "./styles/Skills/styles.scss";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <PageStructure children={<Skills />} />
          </Route>
          <Route exact path="/dashboard">
            <PageStructure children={<Dashboard />} />
          </Route>
          <Route exact path="/internships">
            <PageStructure children={<InternShip />} />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
