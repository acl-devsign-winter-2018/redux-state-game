// jest.mock('../../services/pokemonApi', () => ({
//   getPokemonImage: jest.fn(() => Promise.resolve('PAYLOAD')),
//   getPokemonText: jest.fn(() => Promise.resolve('PAYLOAD'))
// }));

// jest.mock('../../services/firebase', () => ({
//   db: jest.fn()
// }));

// import { GAME_NEW, GAME_END } from './reducers';
// import { newGame, endGame } from './actions';

// describe('game action tests:', () => {

//   it('creates new game action', () => {
//     const dispatch = jest.fn();
//     const getState = jest.fn(() => ({
//       words: ['one']
//     }));
//     const result = newGame();

//     result(dispatch, getState);

//     expect(dispatch.mock.calls[0][0].type).toBe(GAME_NEW);
//     return dispatch.mock.calls[0][0].payload
//       .then(result => {
//         expect(result).toEqual({ word: 'one', image: 'PAYLOAD', text: 'PAYLOAD' });
//       });
//   });

//   it.skip('creates an endgame action', () => {
//     const { type, payload } = endGame('me', 20);
//     expect(type).toBe(GAME_END);
//     expect(payload).toEqual({ player: 'me', score: 20 });
//   });
// });