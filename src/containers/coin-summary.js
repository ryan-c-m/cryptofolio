import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import CoinSummary from "../components/coin-summary";
import * as coinActions from "../store/coins/coin-actions"

class CoinSummaryContainer extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="container mt-4">
        <CoinSummary addedCoins={this.props.addedCoins} refresh={this.props.refresh} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    addedCoins: state.coins.addedCoins
  };
}

function mapDispatchToProps(dispatch) {
  return {
    refresh() {
      dispatch(coinActions.refreshCoinData());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  CoinSummaryContainer
);
