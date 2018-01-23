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
      const newCoin = { code: "XRP", quantity: 5 };
      state = coinReducer(state, { type: "COINS_ADD", added: newCoin });
      expect(state).toEqual({ addedCoins: [newCoin] });
    });
    it("should not duplicate adding coin code already existing", () => {
      let state = { addedCoins: [{ code: "XRP", quantity: 5 }] };
      const newCoin = { code: "XRP", quantity: 4 };
      state = coinReducer(state, { type: "COINS_ADD", added: newCoin });
      expect(state).toEqual({ addedCoins: [{ code: "XRP", quantity: 5 }] });
    });
  });
  describe("COINS_DELETE", () => {
    it("removes coin code from store if it exists", () => {
      let state = { addedCoins: [{ code: "XRP", quantity: 5 }] };
      const deleteCoin = "XRP";
      state = coinReducer(state, { type: "COINS_DELETE", deleted: deleteCoin });
      expect(state).toEqual({ addedCoins: [] });
    });
    it("does not remove other coin code from store", () => {
      let state = {
        addedCoins: [{ code: "XRP", quantity: 5 }, { code: "BTC", quantity: 5 }]
      };
      const deleteCoin = "BTC";
      state = coinReducer(state, { type: "COINS_DELETE", deleted: deleteCoin });
      expect(state).toEqual({ addedCoins: [{ code: "XRP", quantity: 5 }] });
    });
  });
  describe("COINS_LOAD_DATA", () => {
    it("loads data", () => {
      let state = {};
      const addedCoins = [
        { code: "XRP", quantity: 5 },
        { code: "BTC", quantity: 5 }
      ];
      state = coinReducer(state, { type: "COINS_LOAD_DATA", addedCoins });
      expect(state).toEqual({
        addedCoins: [{ code: "XRP", quantity: 5 }, { code: "BTC", quantity: 5 }]
      });
    });
  });
});
