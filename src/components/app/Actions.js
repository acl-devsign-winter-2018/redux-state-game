import { CHOICE, WIN, activePlayer, nextPlayer } from './reducers';

export function takeTurns(){
  return (dispatch, getState) => {
    let { squares } = getState().game;
    if(nextPlayer !== activePlayer) {
      dispatch({
        type: CHOICE,
        payload: activePlayer
      });
    }   
    
    const winner = checkWinner(squares);
    squares = getState().game.squares;

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
