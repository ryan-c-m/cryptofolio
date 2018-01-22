import React, { Component } from "react";
import autoBind from "react-autobind";

export default class CoinTotal extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  getDollarTotal() {
    if (this.props.addedCoins.length === 0) return 0;
    return this.props.addedCoins.reduce(
      (accumulator, coin) => accumulator + coin.quantity * coin.price_aud,
      0
    );
  }

  getBtcTotal() {
    if (this.props.addedCoins.length === 0) return 0;
    return this.props.addedCoins.reduce(
      (accumulator, coin) => accumulator + coin.quantity * coin.price_btc,
      0
    );
  }

  render() {
    return (
      <div className="row col-sm-12 mt-3">
        ${this.getDollarTotal().toFixed(2)} AUD /{" "}
        {this.getBtcTotal().toFixed(2)} BTC
      </div>
    );
  }
}
