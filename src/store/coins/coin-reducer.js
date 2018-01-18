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
    default:
      return state;
  }
}

const addCoin = (state, newCoin) => {
  let exists = false;
  const currentCoins = state.coins;
  currentCoins.map(existingCoin => {
    if (newCoin.code === existingCoin.code) exists = true;
  });
  return exists ? state : { ...state, coins: [...currentCoins, newCoin] };
};
