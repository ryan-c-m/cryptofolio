import React, { Component } from "react";
import CoinIndex from "./containers/coin-index";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <CoinIndex />
      </div>
    );
  }
}

export default App;
