import Immutable from "seamless-immutable";
import * as types from "./action-types";

const initialState = Immutable({
  coins: [],
  exchanges: [],
  selectedCoins: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.COINS_FETCHED:
      return { ...state, coins: action.coins };
    case types.COINS_ADD:
      return addCoin(state, action.added);
    case types.COINS_DELETE:
      return deleteCoin(state, action.deleted);
    default:
      return state;
  }
}

const addCoin = (state, newCoin) => {
  let exists = false;
  const currentCoins = state.coins;
  currentCoins
    .filter(existingCoin => newCoin.code === existingCoin.code)
    .map(existingCoin => (exists = true));
  return exists ? state : { ...state, coins: [...currentCoins, newCoin] };
};

const deleteCoin = (state, deleteCoin) => {
  const currentCoins = state.coins;
  let index = undefined;
  currentCoins
    .filter(existingCoin => existingCoin.code === deleteCoin)
    .map(existingCoin => (index = currentCoins.indexOf(existingCoin)));
  state.coins.splice(index, 1);
  return { ...state, coins: [...currentCoins] };
};
