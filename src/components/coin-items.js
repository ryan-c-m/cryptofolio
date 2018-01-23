import React, { Component } from "react";
import autoBind from "react-autobind";
import Select from "react-select";

export default class CoinItems extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleDelete(code, event) {
    this.props.deleteCoin(code);
  }

  render() {
    let total = this.props.addedCoins.reduce(
      (accumulator, coin) => accumulator + coin.quantity * coin.price_aud,
      0
    );
    const coinItems =
      this.props.addedCoins.length > 0
        ? this.props.addedCoins
            .sort((a, b) => a.value() < b.value())
            .map(coin => {
              return (
                <div
                  className="row align-items-center mt-1 mb-1"
                  key={coin.code}
                >
                  <div className="col-md-3">
                    {coin.code} (${coin.price_aud.toFixed(2)})
                  </div>
                  <div className="col-md-2">{coin.quantity}</div>
                  <div className="col-md-3">
                    ${(coin.quantity * coin.price_aud).toFixed(2)} ({(
                      coin.value() /
                      total *
                      100
                    ).toFixed(0)}%)
                  </div>
                  <div className="col-md-2">{coin.change}%</div>
                  <div className="col-md-2">
                    <button
                      className="coin_list__delete"
                      onClick={e => this.handleDelete(coin.code, e)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })
        : "There is nothing here...";

    const header = (
      <div className="row">
        <div className="col-sm-3">
          <h4>Currency</h4>
        </div>
        <div className="col-sm-2">
          <h4>Units</h4>
        </div>
        <div className="col-sm-3">
          <h4>Value</h4>
        </div>
        <div className="col-sm-2">
          <h4>Change (24h)</h4>
        </div>
      </div>
    );
    return (
      <div className="added-items">
        {header}
        {coinItems}
      </div>
    );
  }
}
