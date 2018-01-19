import React, { Component } from "react";
import autoBind from "react-autobind";

export default class CoinTotal extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
    let total = 0;
    this.props.addedCoins.map(coin => (total += coin.quantity * coin.price));
    return (
      <div className="row col-sm-12 mt-3">
        <h3>${total.toFixed(2)}</h3>
      </div>
    );
  }
}
