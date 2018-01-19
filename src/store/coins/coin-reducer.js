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
  let exists = false;
  const currentCoins = state.addedCoins;
  currentCoins
    .filter(existingCoin => newCoin.code === existingCoin.code)
    .map(existingCoin => (exists = true));
  return exists ? state : { ...state, addedCoins: [...currentCoins, newCoin] };
};

const deleteCoin = (state, deleteCoin) => {
  const currentCoins = state.addedCoins;
  let index = undefined;
  currentCoins
    .filter(existingCoin => existingCoin.code === deleteCoin)
    .map(existingCoin => (index = currentCoins.indexOf(existingCoin)));
  state.addedCoins.splice(index, 1);
  return { ...state, addedCoins: [...currentCoins] };
};
