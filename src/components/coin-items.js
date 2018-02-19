import React, { Component } from "react";
import autoBind from "react-autobind";

export default class CoinItems extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  handleDelete(code, event) {
    this.props.deleteCoin(code);
  }

  render() {
    const coinItems =
      this.props.addedCoins.length > 0
        ? this.props.addedCoins
            .sort((a, b) => b.quantity * b.price_aud - a.quantity * a.price_aud)
            .map(coin => {
              return (
                <div className="row mt-1 mb-1" key={coin.code}>
                  <div className="coin_list__name col-3 col-md-2">
                    {coin.code}
                  </div>
                  <div className="col-3 col-md-2">
                    <span className="coin_list__primary">
                      ${(coin.quantity * coin.price_aud).toFixed(2)}
                    </span>
                    <br />
                    <span className="coin_list__secondary">
                      {coin.quantity}
                    </span>
                  </div>
                  <div
                    className={
                      "col-3 " +
                      (coin.change >= 0 ? "coin_list--up" : "coin_list--down")
                    }
                  >
                    <span className="coin_list__primary">
                      ${coin.price_aud.toFixed(2)}
                    </span>
                    <br />
                    {coin.change >= 0 ? "+" : ""}
                    <span className="coin_list__secondary">{coin.change}%</span>
                  </div>
                  <div className="col-3">
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
      <div className="coin_list__header row">
        <div className="col-3 col-md-2">
          <h4>Currency</h4>
        </div>
        <div className="col-3 col-md-2">
          <h4>Value</h4>
        </div>
        <div className="col-3">
          <h4>Price</h4>
        </div>
      </div>
    );
    return (
      <div className="coin_list__added_items">
        {header}
        {coinItems}
      </div>
    );
  }
}
