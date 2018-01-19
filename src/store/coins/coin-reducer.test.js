import coinReducer from "./coin-reducer";

import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("coinReducer", () => {
  describe("COINS_FETCHED", () => {
    it("returns coins", () => {
      const coinList = ["BTC"];
      let state = { coinList: coinList };
      state = coinReducer(state, {
        type: "COINS_FETCHED",
        coinList: coinList
      });
      expect(state).toEqual({ coinList: coinList });
    });
  });
  describe("COINS_ADD", () => {
    it("adds coin to store", () => {
      let state = { addedCoins: [] };
      const newCoin = { code: "XRP", price: 0.01 };
      state = coinReducer(state, { type: "COINS_ADD", added: newCoin });
      expect(state).toEqual({ addedCoins: [newCoin] });
    });
    it("should not duplicate adding coin code already existing", () => {
      let state = { addedCoins: [{ code: "XRP", price: 0.01 }] };
      const newCoin = { code: "XRP", price: 0.01 };
      state = coinReducer(state, { type: "COINS_ADD", added: newCoin });
      expect(state).toEqual({ addedCoins: [newCoin] });
    });
  });
});
