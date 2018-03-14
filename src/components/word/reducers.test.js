import { WORDS_LOAD, words } from './reducers';

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

