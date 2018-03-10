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