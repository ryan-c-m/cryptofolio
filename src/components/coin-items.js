import React, { Component } from "react";
import autoBind from "react-autobind";

export default class CoinItems extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { code: "", quantity: 1 };
  }

  handleSubmit(event) {
    this.props.addCoin({
      code: this.state.code,
      price: 1,
      quantity: this.state.quantity
    });
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleDelete(code, event) {
    this.props.deleteCoin(code);
  }

  render() {
    let total = 0;
    this.props.coins.map(coin => (total += coin.quantity * coin.price));
    const coinItems = this.props.coins.map(coin => {
      return (
        <div className="row" key={coin.code}>
          <div className="col-sm-3">
            {coin.code} (${coin.price})
          </div>
          <div className="col-sm-3">{coin.quantity}</div>
          <div className="col-sm-3">${coin.quantity * coin.price}</div>
          <div className="col-sm-2">
            ({(coin.quantity * coin.price / total * 100).toFixed(1)}%)
          </div>
          <div className="col-sm-1">
            <button onClick={e => this.handleDelete(coin.code, e)}>
              Delete
            </button>
          </div>
        </div>
      );
    });
    const coinAdd = (
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-3">
            <input
              value={this.state.code}
              onChange={this.handleChange}
              name="code"
              placeholder="Enter coin"
            />
          </div>
          <div className="col-sm-2">
            <input
              value={this.state.quantity}
              onChange={this.handleChange}
              name="quantity"
              placeholder="Enter quantity"
            />
          </div>
          <div className="col-sm-1">
            <input type="submit" value="+" className="btn-block" />
          </div>
        </form>
      </div>
    );
    const header = (
      <div className="row">
        <div className="col-sm-3">
          <h4>Currency</h4>
        </div>
        <div className="col-sm-3">
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
      <div>
        {header}
        {coinItems}
        {coinAdd}
      </div>
    );
  }
}
