export const CHOICE = 'CHOICE';
export const WIN = 'WIN';

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
    default:
      return state;
  }
} 