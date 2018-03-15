import { CHOICE, WIN, TIE, RESET, LOAD_GAME, END_GAME, ADD_PLAYERS } from './reducers';
import { db } from '../../services/firebase';
const resultsRef = db.ref('results');


export function takeTurn(i) {
  return (dispatch, getState) => {

    // choice 
    const { activePlayer, gameOver, squares, winResults } = getState().game;
    let updatedGame = [...squares];
  
    if(updatedGame[i] !== null) return;
    if(gameOver === true) return;
    updatedGame[i] = activePlayer;

    let nextPlayer = (activePlayer === 'X') ? 'O' : 'X';

    // dispatch new payload - win
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
      //being called at histories.js
      dispatch({
        type: END_GAME,
        payload: {
          timestamp: new Date(),
          winResults,
          winner
        }
      });
      dispatch(endGame());
    }

    // tie
    if(newSquares.indexOf(null) === -1 && winner === null) {
      dispatch({
        type: TIE
      });
    }

  };
}

export function reset() {
  return (dispatch, getState) => {
    const { winner, activePlayer, tie } = getState().game;
    const cleanSquares = Array(9).fill(null);

    let newActivePlayer = activePlayer;
    if(tie === false) {
      newActivePlayer = (winner === 'X') ? 'O' : 'X';
    }
    else {
      newActivePlayer = (activePlayer === 'X') ? 'O' : 'X';
    }

    dispatch({
      type: RESET,
      payload: { winner, activePlayer:newActivePlayer, squares: cleanSquares }
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



// export const loadGame = () => {
//   const payload = localStorage.games ? JSON.parse(localStorage.games) : [];

//   return {
//     type: LOAD_GAME,
//     payload
//   };
// };

export function loadGame() {

  return {
    type: LOAD_GAME,
    payload: resultsRef.once('value').then(data => {
      const results = data.val();
      if(!results) return [];

      return Object.keys(results).map(key => {
        const result = results[key];
        result.key = key;
        return result;
      });
    })
  };
}


export function endGame() {
  return (dispatch, getState) => {
    const { winResults } = getState().game;
    const result = {
      score: winResults,
      winResults: winResults.length
    };

    const newRef = resultsRef.push();

    dispatch({
      type: END_GAME, 
      payload: newRef.set(result).then(() => {
        result.key = newRef.key;
        return result;
      })
    });
  };
}

export function addPlayers(playerNames) {
  return {
    type: ADD_PLAYERS,
    payload: playerNames
  };
}
