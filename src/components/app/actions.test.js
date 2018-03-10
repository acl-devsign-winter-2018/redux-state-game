import { GAME_NEW, WORDS_LOAD } from './reducers';
import { loadWords, newGame } from './actions';
import { words } from './pokemonNames';

describe('words action tests:', () => {

  it('creates load words action', () => {
    const { type, payload } = loadWords();
    expect(type).toBe(WORDS_LOAD);
    expect(payload).toBe(words);
  });
});

// describe('game action tests:', () => {

//   it('creates new game action', () => {
//     const { type, payload } = newGame();
//     expect(type).toBe(GAME_NEW);
//     expect(payload).toBeTruthy();
//   });
// });
//unsure of how to test a thunk