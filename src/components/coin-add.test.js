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

it('calls add coin action on submit', () => {
    wrapper.find("#add_coin__submit_btn").simulate('click');
    expect(addCoinFn.mock.calls.length).toBe(1);
});