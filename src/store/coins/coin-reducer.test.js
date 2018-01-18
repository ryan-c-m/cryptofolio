import coinReducer from "./coin-reducer";

import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("coinReducer", () => {
  describe("COINS_FETCHED", () => {
    it("returns coins", () => {
      let state = { coins: [] };
      const coins = [{ code: "BTC", price: 2000 }];
      state = coinReducer(state, { type: "COINS_FETCHED", coins: coins });
      expect(state).toEqual({ coins: coins });
    });
  });
  describe("COINS_ADD", () => {
    it("adds coin to store", () => {
      let state = { coins: [] };
      const newCoin = { code: "XRP", price: 0.01 };
      state = coinReducer(state, { type: "COINS_ADD", added: newCoin });
      expect(state).toEqual({ coins: [newCoin] });
    });
    it("should not duplicate adding coin code already existing", () => {
      let state = { coins: [{ code: "XRP", price: 0.01 }] };
      const newCoin = { code: "XRP", price: 0.01 };
      state = coinReducer(state, { type: "COINS_ADD", added: newCoin });
      expect(state).toEqual({ coins: [newCoin] });
    });
  });
});
