import React, { Component } from "react";
import autoBind from "react-autobind";
import Select from "react-select";
import Modal from "react-modal";


export default class CoinAdd extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = { code: "", quantity: "", modalIsOpen: false };
  }

  handleSubmit() {
    this.props.addCoin({
      code: this.state.code,
      quantity: this.state.quantity
    });
    this.setState({ code: "", quantity: "", modalIsOpen: false });
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

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {

    const modalStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        minWidth: '320px'
      }
    };

    const coinAddModal = (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={modalStyles}
      >
        <h3>Add coin</h3>
        <div>
          <div className="mt-2">
            <Select
              options={this.getCoinOptions()}
              value={this.state.code}
              name="value"
              onChange={this.updateCode}
              placeholder="Select coin..."
            />
          </div>
          <div className="mt-2">
            <input
              id="quantity"
              value={this.state.quantity}
              onChange={this.updateQuantity}
              name="quantity"
              placeholder="Quantity"
              className="form-control"
            />
          </div>
          <div className="mt-4">
            <button type="submit" onClick={this.handleSubmit}
              className="add_coin__submit_btn btn btn-primary mr-2">Add</button>
            <button
              id=""
              type="submit"
              onClick={this.closeModal}
              className="add_coin__cancel_btn btn btn-primary mr-2"
            >
              Cancel
          </button>
          </div>
        </div>
      </Modal >
    );
    const coinAdd = (
      <div className="row">
        <button className="btn btn-primary col-12 col-md-8" onClick={this.openModal}>
          Add coin
        </button>
      </div>
    );
    return (
      <div className="coin_add container mt-3 mb-3">
        {coinAdd}
        {coinAddModal}
      </div>
    );
  }
}
