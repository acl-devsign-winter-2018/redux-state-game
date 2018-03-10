export const GAME_NEW = 'GAME_NEW';
export const WORDS_LOAD = 'WORDS_LOAD';

export function game(state = '', { type, payload }) {
  switch(type) {
    case GAME_NEW:
      return payload;
    default:
      return state;
  }
}

export function words(state = [], { type, payload }) {
  switch(type) {
    case WORDS_LOAD:
      return payload;
    default:
      return state;
  }
}