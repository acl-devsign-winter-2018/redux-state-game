export const CHOICE = 'CHOICE';
export const WINNER_WINNER_CHICKEN_DINNER = 'WINNER_WINNER_CHICKEN_DINNER';
export const RESET = 'RESET';
export const TIE = 'TIE';
export const MATCH_END = 'MATCH_END';
export const MATCH_LOAD = 'MATCH_LOAD';

export const initialState = {
  squares: Array(9).fill(null),
  activePlayer: 'X',
  winner: '',
  xWins: 0,
  oWins: 0,
  gameOver: false
};

export default function game(state = initialState, { type, payload }) {
  switch(type) {
    case CHOICE: {
      let updatedGame = [...state.squares];
      const { activePlayer, id } = payload;

      const nextPlayer = (activePlayer === 'X') ? 'O' : 'X';

      if(updatedGame[id] !== null) return state;
      if(state.gameOver === true) return state;
      updatedGame[id] = activePlayer;
      
      return {
        ...state, 
        squares: updatedGame,
        activePlayer: nextPlayer
      };
    }
    case WINNER_WINNER_CHICKEN_DINNER:{
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

    case MATCH_LOAD:
      return {
        ...state,
        ...payload
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
        winner: ''
      };
    }
    default:
      return state;
  }
} 


