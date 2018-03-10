import { WORDS_LOAD } from './reducers';
import { loadWords } from './actions';
import { words } from '../app/pokemonNames';

describe('words action tests:', () => {

  it('creates load words action', () => {
    const { type, payload } = loadWords();
    expect(type).toBe(WORDS_LOAD);
    expect(payload).toBe(words);
  });
});
