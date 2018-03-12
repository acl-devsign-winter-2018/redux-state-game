import { CHOICE, WIN, game } from './reducers';

describe('game reducer', () => {
  
  let testState = {
    squares: Array(9).fill(''),
    activePlayer: 'X',
    turns: 0,
    winner: ''
  };

  it('returns updated game state', () => {

    const state = game(testState, { type: CHOICE, payload: testState });
    expect.objectContaining({
      squares: Array(9).fill(''),
      activePlayer: 'O',
      turns: 1,
      winner: ''
    });
  });
});