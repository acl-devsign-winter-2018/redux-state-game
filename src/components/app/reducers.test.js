import { GAME_NEW, word } from './reducers';
import { loading, error, LOAD_START, LOAD_END, ERROR } from './reducers';


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

describe('loading reducer', () => {

  it('initial state', () => {
    const state = loading(undefined, {});
    expect(state).toBe(false);
  });

  it('load start', () => {
    const state = loading(false, { type: LOAD_START });
    expect(state).toBe(true);
  });

  it('load end', () => {
    const state = loading(true, { type: LOAD_END });
    expect(state).toBe(false);
  });

});

describe('error reducer', () => {

  it('initial state', () => {
    const state = error(undefined, {});
    expect(state).toBeNull();
  });

  it('sets an error', () => {
    const state = error(null, { type: ERROR, payload: { message: 'error' } });
    expect(state).toEqual({ message: 'error' });
  });

  it('clears an error', () => {
    const state = error({}, { type: LOAD_START });
    expect(state).toBeNull();
  });
});