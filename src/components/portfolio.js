import React, { Component } from "react";
import CoinSummaryContainer from "./../containers/coin-summary";
import CoinItemsContainer from "./../containers/coin-items";
import { ToastContainer } from 'react-toastify';

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <CoinSummaryContainer />
        <CoinItemsContainer />
        <ToastContainer
          position="bottom-left"
          autoClose={50000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}
