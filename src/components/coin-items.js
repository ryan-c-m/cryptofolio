import React, { Component } from 'react';
import autoBind from 'react-autobind';

export default class CoinItems extends Component {

  constructor(props) {
    super(props);
    autoBind(this);
    this.state = {'code': "", 'quantity': 1};
  }

  handleSubmit(event) {
    this.props.addCoin({"code" : this.state.code, "price" : 1, "quantity": this.state.quantity});
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    const coinItems = this.props.coins.map((coin) => {
        return (<div key={coin.code}>{coin.code} (${coin.price}) * {coin.quantity} == ${coin.quantity * coin.price}</div>)
      }
    );
    return (
    <div>
        {coinItems}
        <div>
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.code} onChange={this.handleChange} name="code" placeholder="Enter coin"/>
                <input value={this.state.quantity} onChange={this.handleChange} name="quantity" placeholder="Enter quantity"/>
                <input type="submit" value="+" />
            </form>
        </div>
    </div>
    );
  }
}
