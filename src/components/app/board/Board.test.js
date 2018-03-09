import React from 'react';
import { shallow } from 'enzyme';
import { X, O } from '../symbols/symbols';
import BlankSymbol from '../blankSymbol/BlankSymbol';
import XSymbol from '../xSymbol/XSymbol';
import OSymbol from '../oSymbol/OSymbol';
import { PureBoard as Board } from './Board';

const board = {
  0: [X, O, ''],
  1: ['', X, O],
  2: [X, X, O]
};

it('Render Board with symbols', () => {
  const startAgain = jest.fn();
  const addSymbol = jest.fn();
  const wrapper = shallow(<Board board={board} startAgain={startAgain} addSymbol={addSymbol} draw={false} turn={X} />);
  expect(wrapper.find(XSymbol).length).toBe(4);
  expect(wrapper.find(OSymbol).length).toBe(3);
  expect(wrapper.find(BlankSymbol).length).toBe(2);
});
