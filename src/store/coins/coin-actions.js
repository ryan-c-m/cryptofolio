import * as types from "./action-types";
import exchangeService from "../../services/exchange-service";

export function fetchCoins() {
  return async (dispatch, getState) => {
    const coinList = await exchangeService.getCoinList();
    dispatch({ type: types.COINS_FETCHED, coinList });
  };
}

export function addCoin(added) {
  return async (dispatch, getState) => {
    const price = await exchangeService.getCurrentPrice(added.code);
    added.price_aud = price.aud;
    added.price_btc = price.btc;
    added.change = price.change;
    added.value = () => added.price_aud * added.quantity;
    dispatch({ type: types.COINS_ADD, added });
  };
}

export function deleteCoin(deleted) {
  return async (dispatch, getState) => {
    dispatch({ type: types.COINS_DELETE, deleted });
  };
}

export function refreshCoinData() {
  return async (dispatch, getState) => {
    getState().coins.addedCoins.forEach(async coin => {
      const price = await exchangeService.getCurrentPrice(coin.code);
      coin.price_aud = price.aud;
      coin.price_btc = price.btc;
      coin.change = price.change;
    });
    dispatch({
      type: types.COINS_LOAD_DATA,
      addedCoins: getState().coins.addedCoins
    });
  };
}
