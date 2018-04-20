import Immutable from "seamless-immutable";
import * as types from "./action-types";

const initialState = Immutable({
  addedCoins: [],
  coinList: []
});

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.COINS_FETCHED:
      return { ...state, coinList: action.coinList };
    case types.COINS_ADD:
      return addCoin(state, action.added);
    case types.COINS_DELETE:
      return deleteCoin(state, action.deleted);
    case types.COINS_LOAD_DATA:
      return { ...state, addedCoins: [...action.addedCoins] };
    default:
      return state;
  }
}

const addCoin = (state, newCoin) => {
  if (!newCoin.code || !newCoin.quantity) return state;
  const exists =
    state.addedCoins.filter(existingCoin => newCoin.code === existingCoin.code)
      .length > 0;
  return exists
    ? state
    : { ...state, addedCoins: [...state.addedCoins, newCoin] };
};

const deleteCoin = (state, deleteCoin) => {
  return {
    ...state,
    addedCoins: [
      ...state.addedCoins.filter(
        existingCoin => existingCoin.code !== deleteCoin
      )
    ]
  };
};
