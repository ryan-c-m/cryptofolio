import exchangeService from "./exchange-service";
import { shallow } from "enzyme";
import React from "react";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("ExchangeService", () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });
  describe("getCurrentPrice", () => {
    it("gets price for coin code", async () => {
      const price = await exchangeService.getCurrentPrice("bitcoin");
      expect(price).toBeGreaterThan(0);
    });
  });
  describe("getCoinList", () => {
    it("gets list of coins", async () => {
      const list = await exchangeService.getCoinList();
      expect(list.length).toBeGreaterThan(10);
    });
  });
});
