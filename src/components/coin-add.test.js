import React from 'react';
import CoinAdd from './coin-add';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";


let addCoinFn;
let wrapper;

beforeEach(() => {
    configure({ adapter: new Adapter() });
    addCoinFn = jest.fn();
    wrapper = shallow(<CoinAdd addCoin={addCoinFn} coinList={[]} />);
});

it('renders', () => {
    expect(wrapper.find('h3').text()).toEqual('Add coin');
});

it('renders a select for coin', () => {
    expect(wrapper.find("Select").length).toBe(1);
})

it('renders an input for quantity', () => {
    expect(wrapper.find("#quantity").length).toBe(1);
})

describe('add coin', () => {
    it('calls add coin action on submit with code and quantity', () => {
        wrapper.instance().updateCode({ value: 'Bitcoin' });
        wrapper.find("#quantity").simulate('change', { target: { name: 'quantity', value: '22' } });
        wrapper.find(".add_coin__submit_btn").simulate('click');
        expect(addCoinFn.mock.calls[0][0]).toEqual({ "code": "Bitcoin", "quantity": "22" });
    });
});

describe('cancel', () => {
    it('does nothing', () => {
        wrapper.find(".add_coin__cancel_btn").simulate('click');
        expect(addCoinFn.mock.calls.length).toBe(0);
    });
})

