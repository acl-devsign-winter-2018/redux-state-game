import { GAME_NEW, WORDS_LOAD, words, word } from './reducers';

describe('words tests:', () => {

  it('defaults to empty array', () => {
    const state = words([], {});
    expect(state).toEqual([]);
  });

  it('loads words', () => {
    const state = words([], { type: WORDS_LOAD, payload: ['a', 'b'] });
    expect(state).toEqual(['a', 'b']);
  });
});

describe('word tests:', () => {

  it('defaults to empty string', () => {
    const state = word('', {});
    expect(state).toEqual('');
  });

  it('sets a word', () => {
    const state = word('', { type: GAME_NEW, payload: 'a' });
    expect(state).toEqual('a');
  });
});
