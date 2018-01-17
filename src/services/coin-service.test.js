import coinService from './coin-service'
import { shallow } from 'enzyme';
import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

describe('CoinService', () => {
  beforeEach(() => {
    configure({ adapter: new Adapter() });
  });
  describe('getAllCoins', () => {
    it('returns a list of coins', async () => {
        const coins = await coinService.getAllCoins();
        expect(coins.length).toBe(4);
      });
  });
});