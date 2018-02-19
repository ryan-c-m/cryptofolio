import React, { Component } from "react";
import CoinSummaryContainer from "./../containers/coin-summary";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home_page__container">
        <CoinSummaryContainer />
      </div>
    );
  }
}
