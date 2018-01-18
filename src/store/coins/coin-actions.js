import * as types from "./action-types";
import coinService from "../../services/coin-service";

export function fetchCoins() {
  return async (dispatch, getState) => {
    const coins = await coinService.getAllCoins();
    dispatch({ type: types.COINS_FETCHED, coins });
  };
}

export function addCoin(added) {
  return async (dispatch, getState) => {
    dispatch({ type: types.COINS_ADD, added });
  };
}

export function deleteCoin(deleted) {
  return (dispatch, getState) => {
    dispatch({ type: types.COINS_DELETE, deleted });
  };
}
