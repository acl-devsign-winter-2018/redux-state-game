import { CHOICE } from './reducers';
import { takeTurn } from './actions';

it('creates CHOICE action', () => {
  const testState = {
    game: {
      squares: Array(9).fill(''),
      activePlayer: 'X',
      winner: ''
    }
  };

  const dispatch = jest.fn();
  const getState = jest.fn(() => (testState));

  const result = takeTurn(5);

  result(dispatch, getState);

  expect(dispatch.mock.calls[0][0].type).toBe(CHOICE);
  expect(dispatch.mock.calls[0][0].payload).toEqual({ activePlayer: 'X', i: 5 });
});