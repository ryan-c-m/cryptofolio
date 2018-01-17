import * as types from './action-types';
import coinService from '../../services/coin-service';

export function fetchCoins() {
    return async(dispatch, getState) => {
        const coins = await coinService.getAllCoins();
        dispatch({ type: types.COINS_FETCHED, coins });
    }
}