import { CHOICE_ADD, WIN_GAME, NEW_GAME, ADD_PLAYER, LOAD_PLAYERS } from './reducers';
import { db } from '../services/firebase';

const gamesRef = db.ref('games');
const playersNode = db.ref('players');


export function playerChoice(id){
  return (dispatch, getState) => {
    
    let { gameBoard } = getState().game;
    
    if(gameBoard[id] === ''){
      dispatch({
        type: CHOICE_ADD,
        payload: id
      });
    }
    gameBoard = getState().game.gameBoard;
    const winner = checkWinner(gameBoard);
    if(winner !== null) {
      dispatch({
        type: WIN_GAME,
        payload: winner
      });
    }
  };
}

export function addPlayer(name){
  playersNode.push(name);
  return {
    type: ADD_PLAYER,
    payload: name
  };
}

export function loadPlayers() {
  //const payload = playersNode ? playersNode : [];
  
  return {
    type: LOAD_PLAYERS,
    payload: playersNode.once('value').then(data => {
      const players = data.val();

      if(!players) return [];

      return Object.keys(players).map(key => {
        const player = players[key];
        player.key = key;
        return player;
      });
    })
  };
}

export function newGame() {
  return {
    type: NEW_GAME
  };
}

export function checkWinner(gameBoard) {
  const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for(let i = 0; i < winCombos.length; i++) {
    const [a, b, c] = winCombos[i];
    if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
      return gameBoard[c];
    }
  }
  return null;
}

