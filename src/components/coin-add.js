import React, { Component } from "react";
import autoBind from "react-autobind";
import Select from "react-select";

export default class CoinAdd extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { code: "", quantity: "", addingCoin: false };
  }
  handleSubmit(event) {
    this.props.addCoin({
      code: this.state.code,
      quantity: this.state.quantity
    });
    this.setState({ code: "", quantity: "", addingCoin: false });
    event.preventDefault();
  }

  updateCode(newValue) {
    if (!newValue) return;
    this.setState({
      code: newValue.value
    });
  }

  updateQuantity(event) {
    this.setState({ quantity: event.target.value });
  }

  getCoinOptions() {
    const options = this.props.coinList.map(item => {
      return { value: item.name, label: item.name };
    });
    return options;
  }

  openAdd() {
    this.setState({ addingCoin: true });
  }

  closeAdd() {
    this.setState({ addingCoin: false });
  }

  render() {
    const coinAddOpen = (
      <form className="row" onSubmit={this.handleSubmit}>
        <div className="col-sm-3">
          <Select
            options={this.getCoinOptions()}
            value={this.state.code}
            name="value"
            onChange={this.updateCode}
            placeholder="Add coin..."
          />
        </div>
        <div className="col-sm-2">
          <input
            value={this.state.quantity}
            onChange={this.updateQuantity}
            name="quantity"
            placeholder="Quantity"
            className="form-control"
          />
        </div>
        <div className="col-sm-4">
          <input type="submit" value="Add" className="btn btn-primary mr-2" />
          <button
            type="submit"
            onClick={this.closeAdd}
            className="btn btn-primary mr-2"
          >
            Cancel
          </button>
        </div>
      </form>
    );
    const coinAddClose = (
      <div>
        <button className="btn btn-primary" onClick={this.openAdd}>
          Add coin
        </button>
      </div>
    );
    return <div> {this.state.addingCoin ? coinAddOpen : coinAddClose} </div>;
  }
}
