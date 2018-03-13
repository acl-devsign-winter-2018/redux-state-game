import { CHOICE_ADD, WIN_GAME } from './reducers';
import { playerChoice, checkWinner } from './actions';

it('creates a choice action', () => {
  const index = 0;
  const result = playerChoice(index);
  const dispatch = jest.fn();
  const getState = jest.fn(() => ({
    game: {
      gameBoard: ['', '', '', '', '', '', '', '', '']
    }
  }));
  result(dispatch, getState);

  expect(dispatch).toBeCalledWith({
    type: 'CHOICE_ADD',
    payload: index
  });
  expect(getState).toBeCalled();
});
  
it('checks for a winner', () => {

  const result = checkWinner(['X', 'X', 'X', 'O', 'O', '', '', '', '']);
  expect(result).toBe('X');  
});

it('dispatches a winner', () => {
  const index = 0;
  const result = playerChoice(index);
  const dispatch = jest.fn();
  const getState = jest.fn(() => ({
    game: {
      gameBoard: ['X', 'X', 'X', '', '', '', '', '', ''],
      winner: 'X'
    }
  }));
  result(dispatch, getState);

  expect(dispatch).toBeCalledWith({
    type: 'WIN_GAME',
    payload: 'X'
  });
  expect(getState).toBeCalled();
});
