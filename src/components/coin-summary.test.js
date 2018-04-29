import React from 'react';
import CoinSummary from './coin-summary';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

let refreshFn;
let wrapper;

beforeEach(() => {
    configure({ adapter: new Adapter() });
});

describe("display empty", () => {

    beforeEach(() => {
        wrapper = shallow(<CoinSummary addedCoins={[]} refresh={refreshFn} />);
    });

    it('does not render with no addedCoins', () => {
        expect(wrapper.html()).toBe(null);
    });
});

describe("display summary", () => {

    beforeEach(() => {
        wrapper = shallow(<CoinSummary addedCoins={[{ code: 'Bitcoin', price_aud: 260, quantity: 4 },
        { code: 'Ethereum', price_aud: 20, quantity: 5 }]} refresh={refreshFn} />);
    });

    it('renders summary with addedCoins', () => {
        expect(wrapper.find(".coin_summary__title").first().text()).toBe("Total portfolio value");
    });

    it('renders total value of addedCoins', () => {
        expect(wrapper.find(".coin_summary__total_dollar").text()).toBe("1140");
    });
});

describe("update price data", () => {

    beforeEach(() => {
        refreshFn = jest.fn();
        wrapper = shallow(<CoinSummary addedCoins={[{ code: 'Bitcoin', price_aud: 260, quantity: 4 },
        { code: 'Ethereum', price_aud: 20, quantity: 5 }]} refresh={refreshFn} />);
    });

    it('calls the refresh function prop', () => {
        wrapper.find(".coin_summary__update").simulate('click');
        expect(refreshFn.mock.calls.length).toBe(1);
    });
});

