import React from "react";
import { Route } from "react-router-dom";
import HomePage from "../client/HomePage";

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={HomePage} />
      </React.Fragment>
    );
  }
}

export default ReactRouter;
