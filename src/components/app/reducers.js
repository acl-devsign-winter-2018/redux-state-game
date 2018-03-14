export const CHOICE = 'CHOICE';
export const WIN = 'WIN';
export const TIE = 'TIE';
export const RESET = 'RESET';
export const WINNER_DISPLAY = 'WINNER_DISPLAY';
export const LOAD_GAME = 'LOAD_GAME';
export const END_GAME = 'END_GAME';


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

export default function game(state = initialState, { type, payload }) {
  switch(type) {
    case CHOICE: {
      return {
        ...state, 
        ...payload
      };
    }

    case WIN:{

      const xWins = payload === 'X' ? ++state.xWins : state.xWins;
      const oWins = payload === 'O' ? ++state.oWins : state.oWins;

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

export function gameLoad(state = [], { type, payload }) {
  switch(type) {
    case END_GAME:
      return [...state, payload];
    case LOAD_GAME: 
      return payload.winResults;
    default:
      return state;
  }
}
