import React, { Component } from "react";
import CoinSummaryContainer from "./../containers/coin-summary";
import CoinItemsContainer from "./../containers/coin-items";

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <CoinSummaryContainer />
        <CoinItemsContainer />
      </div>
    );
  }
}
