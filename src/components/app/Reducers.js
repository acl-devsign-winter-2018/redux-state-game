export const CHOICE = 'CHOICE';
export const WIN = 'WIN';

export const initialState = {
  squares: Array(9).fill(''),
  activePlayer: 'X',
  nextPlayer: 'O',
  winner: ''
};

export function game(state = initialState, { type, payload }) {
  switch(type) {
    case CHOICE: {
      let updatedGame = [...state.squares];
      const { activePlayer, id } = payload;

      if(updatedGame[id] !== null) return state;
      updatedGame[id] = activePlayer;

      let nextPlayer = (activePlayer === 'X') ? 'O' : 'X';

      return {
        ...state, 
        squares: updatedGame,
        activePlayer: nextPlayer
      };

    }

    case WIN:
      return {
        ...state,
        winner: payload
      };
    
    default:
      return state;
  }
} 