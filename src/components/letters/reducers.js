export const LETTER_GUESS = 'LETTER_GUESS';
export const INCORRECT_UPDATE = 'INCORRECT_UPDATE';
import { GAME_NEW } from '../game/reducers';

export function letter(state = [], { type, payload }) {
  switch(type) {
    case LETTER_GUESS:
      return [
        ...state,
        payload
      ];
    case GAME_NEW:
      return [];
    default:
      return state;
  }
}

export function incorrect(state = 0, { type, payload }) {
  switch(type) {
    case INCORRECT_UPDATE: {
      const prev = state;
      return prev + payload;
    }
    case GAME_NEW:
      return 0;
    default:
      return state;
  }
}