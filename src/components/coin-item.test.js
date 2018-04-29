import React from 'react';
import CoinItem from './coin-item';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";


let openModalFn;
let wrapper;

const code = 'Bitcoin;'
const price = 10.92;
const quantity = 2;
const change = 4;

beforeEach(() => {
    configure({ adapter: new Adapter() });
    openModalFn = jest.fn();
    wrapper = shallow(<CoinItem coin={{ code, price_aud: price, quantity, change }} openModal={openModalFn} />);
});

it('renders with coin name', () => {
    expect(wrapper.find('.coin_list__name').text()).toEqual(code);
});

it('renders coin price', () => {
    expect(wrapper.find('.coin_list__price').text()).toEqual("$" + price);
});

it('renders coin holdings value', () => {
    const value = "$" + (price * quantity);
    expect(wrapper.find('.coin_list__value').text()).toEqual(value);
});

it('renders coin value change', () => {
    expect(wrapper.find('.coin_list__change').text()).toEqual(change + "%");
});

describe('delete coin', () => {
    it('calls delete function prop', () => {
        wrapper.find(".coin_list__delete").simulate('click');
        expect(openModalFn.mock.calls.length).toBe(1);
    })
});