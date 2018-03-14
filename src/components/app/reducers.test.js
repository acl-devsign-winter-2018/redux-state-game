import { CHOICE } from './reducers';
import game from './reducers';

describe('game reducer', () => {

  it('should initialize', () => {
    const state = game(undefined, {});
    expect(state.activePlayer).toBe('X');
  });

  it('should add a choice', () => {
    const state = game(undefined, { type: CHOICE, payload:1 });
    expect(state.activePlayer).toBe('O');
    expect(state.squares[1]).toBe('X');  
  });

});