import { LETTER_GUESS } from './reducers';
import { guessLetter } from './actions';

describe('Letter actions tests:', () => {

  it('creates letter guess action', () => {
    const { type, payload } = guessLetter('a');
    expect(type).toBe(LETTER_GUESS);
    expect(payload).toBe('a');
  });
});