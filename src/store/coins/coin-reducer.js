import Immutable from "seamless-immutable";
import * as types from "./action-types";

const initialState = Immutable({
  addedCoins: [],
  coinList: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.COINS_FETCHED:
      const newstate = { ...state, coinList: action.coinList };
      return newstate;
    case types.COINS_ADD:
      return addCoin(state, action.added);
    case types.COINS_DELETE:
      return deleteCoin(state, action.deleted);
    default:
      return state;
  }
}

const addCoin = (state, newCoin) => {
  if (!newCoin.code || !newCoin.quantity) return state;
  return state.addedCoins.filter(
    existingCoin => newCoin.code === existingCoin.code
  ).length > 0
    ? state
    : { ...state, addedCoins: [...state.addedCoins, newCoin] };
};

const deleteCoin = (state, deleteCoin) => {
  state.addedCoins.splice(
    state.addedCoins
      .filter(existingCoin => existingCoin.code === deleteCoin)
      .map(existingCoin => state.addedCoins.indexOf(existingCoin)),
    1
  );
  return { ...state, addedCoins: [...state.addedCoins] };
};
