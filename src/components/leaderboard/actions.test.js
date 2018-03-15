jest.mock('../../services/gameApi', () => ({
  onScoresList: jest.fn(handler => {
    handler({});
  }),

  
}));
import { loadLeaderboard } from './actions';
import { SCORES_LOAD } from '../game/reducers';

it('listens for a score change', () => {
  const thunk = loadLeaderboard();
  expect(typeof thunk).toBe('function');
  const dispatch = jest.fn();
  thunk(dispatch);

  expect(dispatch).toBeCalledWith({
    type: SCORES_LOAD,
    payload: {}
  });
});