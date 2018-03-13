import { player } from './reducers';

describe('Player tests', () => {

  it('sets default player state to empty string', () => {
    const state = player(undefined, {});
    expect(state).toEqual('');
  });

  it('assigns player name', () => {
    const state = player('name', {});
    expect(state).toEqual('name');
  });

});