export const LETTER_GUESS = 'LETTER_GUESS';

export function letter(state = [], { type, payload }) {
  switch(type) {
    case LETTER_GUESS:
      return [
        ...state,
        payload
      ];

    default:
      return state;
  }
}