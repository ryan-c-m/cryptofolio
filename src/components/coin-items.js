import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class CoinItems extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
  }

  render() {
    const coinItems = this.props.coins.map((coin) => {
        return (<div key={coin.code}>{coin.code} (${coin.price}) * {coin.quantity} == ${coin.quantity * coin.price}</div>)
      }
    );
    return (<div>{coinItems}</div>);
  }
}
