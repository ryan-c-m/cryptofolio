import React, { Component } from "react";
import autoBind from "react-autobind";
import Portfolio from "./portfolio";
import { Switch, Route } from "react-router-dom";

export default class MainView extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    return (
      <main>
        <Switch>
          <Route path="/cryptofolio" component={Portfolio} />
          <Route path="/portfolio" component={Portfolio} />
          <Route exact path="/" component={Portfolio} />
        </Switch>
      </main>
    );
  }
}
