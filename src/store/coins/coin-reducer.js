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
      return { ...state, coins: [...state.coins, action.added] };
    default:
      return state;
  }
}
