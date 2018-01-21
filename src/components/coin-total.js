import React, { Component } from "react";
import autoBind from "react-autobind";

export default class CoinTotal extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  getDollarTotal() {
    let total = 0;
    this.props.addedCoins.map(
      coin => (total += coin.quantity * coin.price_aud)
    );
    return total;
  }

  getBtcTotal() {
    let total = 0;
    this.props.addedCoins.map(
      coin => (total += coin.quantity * coin.price_btc)
    );
    return total;
  }

  render() {
    return (
      <div className="row col-sm-12 mt-3">
        <h3>
          ${this.getDollarTotal().toFixed(2)} AUD /{" "}
          {this.getBtcTotal().toFixed(2)} BTC
        </h3>
      </div>
    );
  }
}
