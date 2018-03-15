import { CHOICE } from './reducers';
import { takeTurn } from './actions';

describe.skip('choice actions', () => {

  it.skip('should creates CHOICE action', () => {
    const testState = {
      game: {
        squares: Array(9).fill(null),
        activePlayer: 'X',
        winner: ''
      }
    };

    const dispatch = jest.fn();
    const getState = jest.fn(() => (testState));

    const result =  takeTurn(5);

    result(dispatch, getState);

    expect(dispatch.mock.calls[0][0].type).toBe(CHOICE);
    expect(dispatch.mock.calls[0][0].payload).toEqual({ 
      activePlayer: 'O', 
      squares: [
        null,
        null,
        null,
        null,
        null,
        'X',
        null,
        null,
        null
      ]
    });
  });
});