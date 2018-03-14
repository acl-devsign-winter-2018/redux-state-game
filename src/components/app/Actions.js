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

export const initialState = {
  squares: Array(9).fill(null),
  activePlayer: 'X',
  nextPlayer: 'O',
  winner: '',
  xWins: 0,
  oWins: 0,
  gameOver: false,
  winResults: []
};

export function takeTurn(i) {
  return (dispatch, getState) => {

    const { activePlayer } = getState().game;
    dispatch({
      type: CHOICE,
      payload: { activePlayer, i }
    });
  };
}

export function tie() {
  return (dispatch, getState) => {
    const { squares } = getState().game;
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

export function winnerDisplay(state) {
  return (dispatch, getState) => {
    let { squares, xWins, oWins, winResults } = getState().game;
    const winner = checkWinner(squares);

    if(state.gameOver === true) return state;

    xWins = state.xWins;
    oWins = state.oWins;
    winResults = state.winResults;

    if(winner === 'X') {
      xWins++;
      winResults.push('X won');
    }

    if(winner === 'O') {
      oWins++;
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