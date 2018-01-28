import React, { Component } from "react";
import CoinSummary from "./../containers/coin-summary";
import CoinIndex from "./../containers/coin-index";

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
