import { CHOICE, WIN, TIE, RESET, LOAD_GAME, END_GAME } from './reducers';

// export function takeTurn(i){
//   return (dispatch, getState) => {

//     const { activePlayer } = getState().game;
//     dispatch({
//       type: CHOICE,
//       payload: { activePlayer, i }
//     });


//     const { squares } = getState().game;
//     const winner = checkWinner(squares);
//     if(winner !== null) {
//       dispatch({
//         type: WIN,
//         payload: winner
//       });
//     }

//     if(squares.indexOf(null) === -1 && winner === null) {
//       dispatch({
//         type: TIE
//       });
//     }

//     const { winResults } = getState().game;

//     dispatch({
//       type: END_GAME,
//       payload: {
//         timestamp: new Date(),
//         winResults
//       }
//     });
//   };
// }


export function takeTurn(i) {
  return (dispatch, getState) => {

    const { activePlayer, gameOver, squares, winResults } = getState().game;
    let updatedGame = [...squares];
  
    if(updatedGame[i] !== null) return;
    if(gameOver === true) return;
    updatedGame[i] = activePlayer;

    let nextPlayer = (activePlayer === 'X') ? 'O' : 'X';

    dispatch({
      type: CHOICE,
      payload: { activePlayer:nextPlayer, squares: updatedGame }
    });

    const newSquares = getState().game.squares;
    const winner = checkWinner(newSquares);
    
    if(winner === 'X') {
      winResults.push('X won');
    }
    
    if(winner === 'O') {
      winResults.push('O won');
    }
    
    if(winner !== null) {
      dispatch({
        type: WIN,
        payload: winner
      });
    }

  };
}

export function tie() {
  return (dispatch, getState) => {
    const { squares, winner } = getState().game;
    if(squares.indexOf(null) === -1 && winner === null) {
      dispatch({
        type: TIE
      });
    }
  };
}

export function endGame() {
  return (dispatch, getState) => {
    const { winResults } = getState().game;
    dispatch({
      type: END_GAME,
      payload: {
        timestamp: new Date(),
        winResults
      }
    });
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

export function reset() {
  return (dispatch, getState) => {
    const { winner } = getState().game;

    dispatch({
      type: RESET,
      payload: { winner }
    });
  };
}

export const loadGame = () => {
  const games = window.localStorage.games;
  if(!games) return;

  return {
    type: LOAD_GAME,
    payload: JSON.parse(games)
  };
};