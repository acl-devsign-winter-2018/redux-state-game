import { CHOICE } from './reducers';
import { takeTurn } from './actions';

it.skip('should creates CHOICE action', async() => {
  const testState = {
    game: {
      squares: Array(9).fill(null),
      activePlayer: 'X',
      winner: ''
    }
  };

  const dispatch = jest.fn();
  const getState = jest.fn(() => (testState));

  const result = await takeTurn(5);

  await result(dispatch, getState);

  expect(dispatch.mock.calls[0][0].type).toBe(CHOICE);
  expect(dispatch.mock.calls[0][0].payload).toEqual({ activePlayer: 'X', i: 5 });
});