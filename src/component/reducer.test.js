import { game, CHOICE_ADD, WIN_GAME, NEW_GAME } from './reducers';

describe('reducer test', () => {

  it('should initialize', () => {
    const state = game(undefined, {});
    expect(state.activePlayer).toBe('X');
  });

  it('should toggle active player', () => {
    const state = game(undefined, { type: CHOICE_ADD, payload:3 });
    expect(state.activePlayer).toBe('O');
    expect(state.gameBoard[3]).toBe('X');  
  });

  it('should reset to initial state', () => {
    const state = game(undefined, { type: NEW_GAME });
    expect(state.activePlayer).toBe('X');
    expect(state.gameBoard[3]).toBe('');  
  });

  it('should register a winner', () => {
    const state = game(undefined, { type: WIN_GAME, payload: 'M' });
    expect(state.winner).toBe('M');
  });


});