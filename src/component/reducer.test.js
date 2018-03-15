import { game, players, ADD_WINNER, ADD_PLAYER, CHOICE_ADD, WIN_GAME, NEW_GAME, LOAD_PLAYERS, ASSIGN_PLAYER1, ASSIGN_PLAYER2
} from './reducers';

describe('reducer test', () => {

  it('should initialize', () => {
    const state = game(undefined, {});
    expect(state.activePlayer).toBe('X');
  });

  it('should toggle active player', () => {
    const state = game(undefined, { type: CHOICE_ADD, payload:3 });
    expect(state.activePlayer).toBe('O');
    expect(state.gameBoard[3]).toBe('X');  
  });

  it('should reset to initial state', () => {
    const state = game(undefined, { type: NEW_GAME });
    expect(state.activePlayer).toBe('X');
    expect(state.gameBoard[3]).toBe('');  
  });

  it('should register a winner', () => {
    const state = game(undefined, { type: WIN_GAME, payload: 'M' });
    expect(state.winner).toBe('M');
  });

  it('players initializes as object with empty arrays', () => {
    const state = players(undefined, {});
    expect(state).toEqual({ players: [], winners: [] });
  });

  it('adds a winner', () => {
    const state = players(undefined, { type: ADD_WINNER, payload: 'Charlie' });
    expect(state).toEqual({ players: [], winners: ['Charlie'] });
    const newWinner = players(state, { type: ADD_WINNER, payload: 'Ayden' });
    expect(newWinner).toEqual({ players: [], winners: ['Charlie', 'Ayden'] });
  });

  it('adds player to players array', () => {
    const state = players(undefined, { type: ADD_PLAYER, payload: 'Charlie' });
    expect(state).toEqual({ players: ['Charlie'], winners: [] });
  });

  it('should load players from local storage', () => {
    const state = players(undefined, { type: LOAD_PLAYERS, payload: ['M', 'J', 'C'] });
    expect(state.players).toEqual(['M', 'J', 'C']);
  });

  it('assign name to X', () => {
    const state = game(undefined, { type: ASSIGN_PLAYER1, payload: 'M' });
    expect(state.X).toEqual({ player1: 'M' }); 
  });

  


});