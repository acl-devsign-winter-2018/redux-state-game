jest.mock('../../services/pokemonApi', () => ({
  getPokemonImage: jest.fn(() => Promise.resolve('PAYLOAD')),
  getPokemonText: jest.fn(() => Promise.resolve('PAYLOAD')),
  word: jest.fn(() => Promise.resolve('PAYLOAD'))
}));

import { GAME_NEW } from './reducers';
import { newGame } from './actions';




describe('game action tests:', () => {

  it.skip('creates new game action', () => {
    const { type, payload } = newGame();
    expect(type).toBe(GAME_NEW);
    return payload.then(result => {
      expect(result).toBe({ word: 'PAYLOAD', image: 'PAYLOAD', text: 'PAYLOAD' });
    });
  });
});