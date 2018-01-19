import * as coinActions from "./coin-actions";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import exchangeService from "../../services/exchange-service";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("../../services/exchange-service");

describe("coinActions", () => {
  describe("fetchCoins", () => {
    const coinList = ["BTC"];
    const store = mockStore();

    beforeEach(() => {
      exchangeService.getCoinList.mockImplementation(() => {
        return coinList;
      });
    });

    it("dispatches a COINS_FETCHED action", async () => {
      const expectedAction = [{ coinList: coinList, type: "COINS_FETCHED" }];
      store.dispatch(coinActions.fetchCoins()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });

  describe("addCoin", () => {
    const store = mockStore();
    it("dispatches a COINS_ADD action", () => {
      const added = { code: "BTC" };
      const expectedAction = [{ added: added, type: "COINS_ADD" }];
      store.dispatch(coinActions.addCoin(added)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
    });
  });
});
