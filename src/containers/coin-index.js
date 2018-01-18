import React, { Component } from 'react';
import autoBind from 'react-autobind';
import { connect } from 'react-redux';
import * as coinActions from '../store/coins/coin-actions';
import CoinItems from '../components/coin-items';

class CoinIndex extends Component {

    constructor(props) {
        super(props);
        autoBind(this);
    }

    componentDidMount() {
        this.props.loadCoins()
    }

    render() {
        return( 
            <div className="CoinIndex">
                <h2>Coins</h2> 
                <CoinItems coins={this.props.coins} addCoin={added => this.props.addCoin(added)}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return state.coins;
}

function mapDispatchToProps(dispatch) {
    return {
      loadCoins() {
        dispatch(coinActions.fetchCoins())
      }, addCoin(added) {
        dispatch(coinActions.addCoin(added))  
      }
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(CoinIndex);