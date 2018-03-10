export const WORDS_LOAD = 'WORDS_LOAD';

export function words(state = [], { type, payload }) {
  switch(type) {
    case WORDS_LOAD:
      return payload;
    default:
      return state;
  }
}