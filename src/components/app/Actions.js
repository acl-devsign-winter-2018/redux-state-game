import { CHOICE, WIN } from './reducers';

export function takeTurns(id){
  return (dispatch, getState) => {

    const { activePlayer } = getState().game;
    dispatch({
      type: CHOICE,
      payload: { activePlayer, id }
    });


    //if not, add square value, check winner, check tie, continue or END
    const { squares } = getState().game;
    const winner = checkWinner(squares);

    if(winner !== null) {
      dispatch({
        type: WIN,
        payload: winner
      });
    }
  };
}


function checkWinner(squares) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for(let i = 0; i < winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
