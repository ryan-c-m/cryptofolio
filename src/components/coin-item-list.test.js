import React from 'react';
import CoinItemList from './coin-item-list';
import { shallow } from 'enzyme';
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const addedCoins = [{ code: 'Bitcoin' }, { code: 'Ethereum' }];
let deleteCoinFn;
let wrapper;

beforeEach(() => {
    configure({ adapter: new Adapter() });
    deleteCoinFn = jest.fn();
    wrapper = shallow(<CoinItemList addedCoins={addedCoins} deleteCoin={deleteCoinFn} />);
});

it('renders a CoinItem for each in addedCoins prop', () => {
    expect(wrapper.find('CoinItem').length).toBe(2);
});

describe('delete coin', () => {

    beforeEach(() => {
        wrapper.instance().openModal({ code: 'Bitcoin' });
    });

    it('renders a modal when the openModal method is called', () => {
        expect(wrapper.update().find('.coin_list__delete_modal_header').text()).toEqual("Delete Bitcoin from your portfolio?");
    });

    it('calls deleteCoin prop function on confirm', () => {
        wrapper.find('.coin_list__confirm_delete').simulate('click');
        expect(deleteCoinFn.mock.calls.length).toBe(1);
    });

    it('does nothing on cancel', () => {
        wrapper.find('.coin_list__cancel').simulate('click');
        expect(deleteCoinFn.mock.calls.length).toBe(0);
    });

});

