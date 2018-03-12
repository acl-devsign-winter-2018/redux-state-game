export const WORDS_LOAD = 'WORDS_LOAD';
export const COUNT_UPDATE = 'COUNT_UPDATE';

export function words(state = [], { type, payload }) {
  switch(type) {
    case WORDS_LOAD:
      return payload;
    default:
      return state;
  }
}

export function correct(state = 0, { type, payload }) {
  switch(type) {
    case COUNT_UPDATE: {
      console.log('updated');
      const prev = state;
      return prev + payload;
    }
    default:
      return state;
  }
}