import { PLAYER_SET } from './reducers';
import { setPlayer } from './actions';

describe('PLayer actions tests', () => {

  it('fires a player set action', () => {
    const { type, payload } = setPlayer('name');
    expect(type).toBe(PLAYER_SET);
    expect(payload).toBe('name');
  });
});