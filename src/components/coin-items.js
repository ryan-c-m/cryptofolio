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
    let total = 0;
    this.props.addedCoins.map(coin => (total += coin.quantity * coin.price));
    const coinItems =
      this.props.addedCoins.length > 0
        ? this.props.addedCoins.map(coin => {
            return (
              <div className="row align-items-center mt-1 mb-1" key={coin.code}>
                <div className="col-md-3">
                  {coin.code} (${coin.price.toFixed(2)})
                </div>
                <div className="col-md-2">{coin.quantity}</div>
                <div className="col-md-3">
                  ${(coin.quantity * coin.price).toFixed(2)}
                </div>
                <div className="col-md-2">
                  ({(coin.quantity * coin.price / total * 100).toFixed(0)}%)
                </div>
                <div className="col-md-2">
                  <button
                    className="btn btn-primary"
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
          <h4>$</h4>
        </div>
        <div className="col-sm-2">
          <h4>%</h4>
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
