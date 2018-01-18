import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class CoinTotal extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }
  render() {
      let total = 0;
      this.props.coins.map(coin => total += coin.quantity * coin.price);
    return(
      <div>Total: ${total}</div>
    );
  }
}