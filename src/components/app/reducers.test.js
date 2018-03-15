import { CHOICE } from './reducers';
import { game } from './reducers';

describe('game reducer', () => {

  it('should initialize', () => {
    const state = game(undefined, {});
    expect(state.activePlayer).toBe('X');
  });

  it('should add a choice', () => {
    const newSquares = Array(9).fill(null);
    newSquares[1] = 'X';
    const state = game(undefined, { type: CHOICE, payload: { squares:newSquares } });
    expect(state.squares[1]).toBe('X');
  });

});