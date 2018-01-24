import React, { Component } from "react";
import CoinSummary from "./coin-summary";
import CoinIndex from "./coin-index";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <CoinSummary />
        <CoinIndex />
      </div>
    );
  }
}
