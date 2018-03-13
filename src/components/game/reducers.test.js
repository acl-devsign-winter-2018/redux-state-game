import { GAME_NEW, word } from './reducers';

describe('word tests:', () => {

  it('defaults to empty string', () => {
    const state = word('', {});
    expect(state).toEqual('');
  });

  it('sets a word', () => {
    const state = word('', { type: GAME_NEW, payload: { word: 'a' } });
    expect(state).toEqual('a');
  });
});
