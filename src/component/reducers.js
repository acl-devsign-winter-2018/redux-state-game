export const CHOICE_ADD = 'CHOICE_ADD';
export const WIN_GAME = 'WIN_GAME';
export const NEW_GAME = 'NEW_GAME';

export const initialState = {
  gameBoard: Array(9).fill(''),
  X: {
    color: 'red'
  },
  O: {
    color: 'black'
  },
  activePlayer: 'X',
  turns: 0,
  winner: ''
};

export function game(state = initialState, { type, payload }){
  switch(type){
    case 'CHOICE_ADD':{ 

      let newBoard = [...state.gameBoard];
      const { activePlayer } = state;
      const newPlayer = (activePlayer === 'X') ? 'O' : 'X'; 
      let totalTurns = state.turns;
      
      newBoard[payload] = activePlayer; 
      totalTurns++;  
      
      return {
        ...state,
        gameBoard: newBoard,
        activePlayer: newPlayer,
        turns: totalTurns
      };
    }  
    case WIN_GAME:
      return {
        ...state,
        winner: payload
      };
    case NEW_GAME:
      return {
        ...initialState
      };
    default:
      return state;
  }
}