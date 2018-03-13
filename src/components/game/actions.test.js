jest.mock('../../services/pokemonApi', () => ({
  getPokemonImage: jest.fn(() => Promise.resolve('PAYLOAD')),
  getPokemonText: jest.fn(() => Promise.resolve('PAYLOAD')),
  word: jest.fn(() => Promise.resolve('PAYLOAD'))
}));

import { GAME_NEW } from './reducers';
import { newGame } from './actions';

describe('game action tests:', () => {

  it.skip('creates new game action', () => {
    const dispatch = jest.fn();
    const getState = jest.fn(() => ({
      words: ['one', 'two']
    }));
    const result = newGame();

    result(dispatch, getState);
    expect(dispatch).toHaveBeenCalledWith({ type: GAME_NEW, payload: {} });
    // return payload.then(result => {
    //   expect(result).toBe({ word: 'PAYLOAD', image: 'PAYLOAD', text: 'PAYLOAD' });
    // });
  });
});