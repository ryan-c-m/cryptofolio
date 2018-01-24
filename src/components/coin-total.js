import React, { Component } from "react";
import autoBind from "react-autobind";

export default class CoinTotal extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  getDollarTotal() {
    return this.props.addedCoins.reduce(
      (accumulator, coin) => accumulator + coin.quantity * coin.price_aud,
      0
    );
  }

  getPreviousTotal() {
    let previous = this.props.addedCoins.reduce(
      (accumulator, coin) =>
        accumulator +
        coin.quantity * coin.price_aud -
        coin.quantity * coin.price_aud * parseFloat(coin.change) / 100,
      0
    );
    return previous;
  }

  getBtcTotal() {
    return this.props.addedCoins.reduce(
      (accumulator, coin) => accumulator + coin.quantity * coin.price_btc,
      0
    );
  }

  getDailyChange() {
    return {
      percent:
        (this.getDollarTotal() - this.getPreviousTotal()) /
        this.getDollarTotal() *
        100,
      dollars: this.getDollarTotal() - this.getPreviousTotal()
    };
  }

  render() {
    return this.props.addedCoins.length > 0 ? (
      <div className="row align-items-center">
        <div className="col-sm-3">
          <span className="coin_summary__total_dollar">
            {this.getDollarTotal().toFixed(2)}
          </span>
          <span className="coin_summary__total_dollar_label">AUD</span>
        </div>
        <div className="col-sm-6">
          <span className="coin_summary__total_btc">
            {this.getBtcTotal().toFixed(2)}
            <span className="coin_summary__total_btc_label">BTC</span>
          </span>
        </div>
        <div className="col-sm-3">
          <span
            className={
              "coin_summary__change_dollar " +
              (this.getDailyChange().dollars > 0
                ? "coin_summary__change_dollar--up"
                : "coin_summary__change_dollar--down")
            }
          >
            {this.getDailyChange().dollars.toFixed(2)}
          </span>
          <span className="coin_summary__change_pct">
            ({this.getDailyChange().percent.toFixed(2)}%)
          </span>
        </div>
      </div>
    ) : null;
  }
}
