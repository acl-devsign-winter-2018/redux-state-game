import { CHOICE, RESET, WINNER_WINNER_CHICKEN_DINNER, TIE, MATCH_END, MATCH_LOAD } from './reducers';
import { save, getAll } from '../services/gameApi';

export function takeTurns(id) {
  return (dispatch, getState) => {
    const { activePlayer } = getState().game;
    dispatch({
      type: CHOICE,
      payload: { activePlayer, id }
    });

    const { squares, xWins, oWins } = getState().game;
    const winner = checkWinner(squares);

    if(winner !== null) {
      dispatch({
        type: WINNER_WINNER_CHICKEN_DINNER,
        payload: winner, xWins, oWins
      });
    }

    if(squares.includes(null) === false && winner === null) {
      dispatch({
        type: TIE
      });
    }
  };
}

export function checkWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for(let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      endMatch();
      return squares[a];
    }
  }
  return null;
}

export function endMatch() {
  return (dispatch, getState) => {
    const { xWins, oWins } = getState().game;

    const match = {
      playerOneScore: xWins,
      playerTwoScore: oWins
    };

    dispatch({
      type: MATCH_END,
      payload: save(match).then(({ name }) => {
        match.key = name;
        return match;
      })
    });
  };
}

export const loadMatch = () => {
  return dispatch => {

    dispatch({
      type: MATCH_LOAD,
      payload: getAll().then(response => {
        let responseObject = {};
        responseObject.response = response;
        return responseObject;
      })
    });
  };
};

export function reset() {
  return (dispatch, getState) => {
    const { winner } = getState().game;

    dispatch({
      type: RESET,
      payload: winner
    });
  };
}