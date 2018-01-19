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
    added.price = await exchangeService.getCurrentPrice(added.code);
    dispatch({ type: types.COINS_ADD, added });
  };
}

export function deleteCoin(deleted) {
  return (dispatch, getState) => {
    dispatch({ type: types.COINS_DELETE, deleted });
  };
}
