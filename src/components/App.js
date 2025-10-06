import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Form from "./Form";
import FormRef from "./FormRef";
import FormState from "./FormState";

export default function App() {
  return (
    <Router>
      <nav
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Link id="form-link" to="/form">
          Layout
        </Link>
        <Link id="form-ref-link" to="/form-ref">
          useRef
        </Link>
        <Link id="form-state-link" to="/form-state">
          useState
        </Link>
      </nav>

      <Switch>
        <Route exact path="/form" component={Form} />
        <Route path="/form-ref" component={FormRef} />
        <Route path="/form-state" component={FormState} />
      </Switch>
    </Router>
  );
}
