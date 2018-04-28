import React, { Component } from "react";
import Modal from "react-modal";
import autoBind from "react-autobind";
import CoinItem from "./coin-item";

export default class CoinItemList extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {
      modalIsOpen: false
    };
  }

  componentWillMount() {
    Modal.setAppElement('body')
  }

  openModal(coin) {
    this.setState({ modalIsOpen: true, coinToDelete: coin.code });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  confirmDelete(code) {
    this.setState({ modalIsOpen: false });
    this.props.deleteCoin(code);
  }

  render() {

    const modalStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };

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

    const coinItems =
      this.props.addedCoins.length > 0
        ? this.props.addedCoins
          .sort((a, b) => b.quantity * b.price_aud - a.quantity * a.price_aud)
          .map(coin => {
            return (
              <CoinItem coin={coin} openModal={this.openModal}
              />);
          })
        : "There is nothing here...";

    const deleteModal = (
      <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        style={modalStyles}
      >
        <h3>Delete {this.state.coinToDelete} from your portfolio?</h3>
        <button className="btn btn-primary" onClick={() => this.confirmDelete(this.state.coinToDelete)}>Confirm</button>
        <button className="coin_list__cancel" onClick={this.closeModal}>Cancel</button>
      </Modal>
    )

    return (
      <div className="coin_list__added_items">
        {header}
        {coinItems}
        {deleteModal}
      </div>
    );
  }
}
