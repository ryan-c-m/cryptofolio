import React, { Component } from "react";
import CoinIndex from "./containers/coin-index";
import CoinSummary from "./containers/coin-summary";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/react-select/dist/react-select.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinSummary />
        <CoinIndex />
      </div>
    );
  }
}

export default App;
