import { letter, LETTER_GUESS } from './reducers';

describe('Letter Tests:', () => {

  it('defaults to empty array', () => {
    const state = letter([], {});
    expect(state).toEqual([]);
  });

  it('adds a guess', () => {
    const state = letter([], { type: LETTER_GUESS, payload: 'a' });
    expect(state).toEqual(['a']);
  });
});