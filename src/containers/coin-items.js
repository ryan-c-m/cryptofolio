import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import * as coinActions from "../store/coins/coin-actions";
import CoinItemList from "../components/coin-item-list";
import CoinAdd from "../components/coin-add";

class CoinItemsContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.props.loadCoins();
    this.props.refreshCoinData();
  }

  render() {
    return (
      <div className="container mt-2">
        <CoinItemList
          addedCoins={this.props.addedCoins}
          deleteCoin={deleted => this.props.deleteCoin(deleted)}
        />
        <CoinAdd
          coinList={this.props.coinList}
          addCoin={added => this.props.addCoin(added)}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addedCoins: state.coins.addedCoins,
    coinList: state.coins.coinList
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadCoins() {
      dispatch(coinActions.fetchCoins());
    },
    addCoin(added) {
      dispatch(coinActions.addCoin(added));
    },
    deleteCoin(deleted) {
      dispatch(coinActions.deleteCoin(deleted));
    },
    refreshCoinData() {
      dispatch(coinActions.refreshCoinData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinItemsContainer);
