export const CHOICE = 'CHOICE';
export const WIN = 'WIN';
export const TIE = 'TIE';
export const RESET = 'RESET';

export const initialState = {
  squares: Array(9).fill(null),
  activePlayer: 'X',
  nextPlayer: 'O',
  winner: '',
  xWins: 0,
  oWins: 0,
  gameOver: false
};

export default function game(state = initialState, { type, payload }) {
  switch(type) {
    case CHOICE: {
      let updatedGame = [...state.squares];
      const { activePlayer, i } = payload;

      if(updatedGame[i] !== null) return state;
      if(state.gameOver === true) return state;
      updatedGame[i] = activePlayer;

      let nextPlayer = (activePlayer === 'X') ? 'O' : 'X';

      return {
        ...state, 
        squares: updatedGame,
        activePlayer: nextPlayer
      };

    }

    case WIN:{
      if(state.gameOver === true) return state;

      let xWins = state.xWins;
      let oWins = state.oWins;

      if(payload === 'X') {
        xWins++;
      }

      if(payload === 'O') {
        oWins++;
      }

      return {
        ...state,
        winner: payload,
        gameOver: true,
        xWins,
        oWins
      };
    }
    case TIE:
      return {
        ...state,
        tie: true, 
        gameOver: true
      };
    case RESET: {
      let newActivePlayer = state.activePlayer;
      if(state.tie === false) {
        newActivePlayer = (state.winner === 'X') ? 'O' : 'X';
      }
      else {
        newActivePlayer = (state.activePlayer === 'X') ? 'O' : 'X';
      }

      const newSquares = Array(9).fill(null);

      return {
        ...state,
        squares: newSquares,
        activePlayer: newActivePlayer,
        gameOver: false,
        tie: false,
        winner: 'no winner'
      };
    }
    default:
      return state;
  }
} 