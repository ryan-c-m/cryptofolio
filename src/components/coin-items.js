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
    let total = this.props.addedCoins.reduce(
      (accumulator, coin) => accumulator + coin.quantity * coin.price_aud,
      0
    );
    const coinItems =
      this.props.addedCoins.length > 0
        ? this.props.addedCoins
            .sort((a, b) => b.quantity * b.price_aud - a.quantity * a.price_aud)
            .map(coin => {
              return (
                <div className="row mt-1 mb-1" key={coin.code}>
                  <div className="col-3 col-sm-2">
                    {coin.code} 
                  </div>
                  <div className="col-3 col-sm-2">
                    ${(coin.quantity * coin.price_aud).toFixed(2)}
                    <br />{coin.quantity}
                  </div>
                  <div
                    className={
                      "col-2 " +
                      (coin.change >= 0 ? "coin_list--up" : "coin_list--down")
                    }
                  >
                    ${coin.price_aud.toFixed(2)}<br />{coin.change >= 0 ? "+" : ""}{coin.change}%
                  </div>
                  <div className="col-1">
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
      <div className="row mb-2">
        <div className="col-3 col-sm-2">
          <h4>Currency</h4>
        </div>
        <div className="col-3 col-sm-2">
          <h4>Value</h4>
        </div>
        <div className="col-2">
          <h4>Price</h4>
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
