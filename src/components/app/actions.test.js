import { CHOICE } from './reducers';
import { takeTurns } from './actions';

it.skip('creates CHOICE action', () => {
  const testState = {
    squares: Array(9).fill(''),
    activePlayer: 'X',
    nextPlayer: 'O',
    turns: 0,
    winner: ''
  };

  // const { type, payload, squares } = takeTurns(5);
  // console.log('*********', squares);

  // expect(type).toBe(CHOICE);
});