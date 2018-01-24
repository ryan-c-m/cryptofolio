import React, { Component } from "react";
import autoBind from "react-autobind";
import { connect } from "react-redux";
import CoinTotal from "../components/coin-total";

class CoinSummary extends Component {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    return (
      <div className="container mt-4">
        <CoinTotal addedCoins={this.props.addedCoins} />
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
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(CoinSummary);
