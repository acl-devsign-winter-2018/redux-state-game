import React from 'react';
import { shallow } from 'enzyme';
import BlankSymbol from './BlankSymbol';

it('calls add Symbol', () => {
  const addSymbol =jest.fn();
  const wrapper = shallow(<BlankSymbol addSymbol={addSymbol} />);
  wrapper.simulate('click');
  expect(addSymbol.mock.calls.length).toBe(1)
});