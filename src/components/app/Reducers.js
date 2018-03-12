export const CHOICE = 'CHIOCE';
export const WIN = 'WIN';

export const initialState = {
  squares: Array(9).fill(''),
  activePlayer: 'X',
  turns: 0,
  winner: ''
};

export function game(state = initialState, { type, payload }) {
  switch(type) {
    case CHOICE: {
      let updatedGame = [...state.squares];
      const { activePlayer } = state;
      const nextPlayer = (activePlayer === 'X') ? 'O' : 'X';
      let turns = state.turns;


      updatedGame[payload] = activePlayer;
      turns++;

      return {
        ...state, 
        squares: updatedGame,
        activePlayer: nextPlayer,
        turns: turns
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