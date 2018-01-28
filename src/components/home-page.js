import React, { Component } from "react";
import CoinSummary from "./../containers/coin-summary";

export default class HomePage extends Component {
  render() {
    return (
      <div className="home_page__container">
        <CoinSummary />
      </div>
    );
  }
}
