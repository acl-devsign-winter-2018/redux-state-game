export const LETTER_GUESS = 'LETTER_GUESS';
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