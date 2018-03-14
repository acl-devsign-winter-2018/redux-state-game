export const GAME_NEW = 'GAME_NEW';
export const GAME_END = 'GAME_END';
export const SCORES_LOAD = 'SCORES_LOAD';


export function word(state = '', { type, payload }) {
  switch(type) {
    case GAME_NEW:
      return payload.word;
    default:
      return state;
  }
}

export function scores(state = [], { type, payload }) {
  switch(type) {
    case SCORES_LOAD:
      return payload;
    default:
      return state;
  }
}

export function gameResult(state = null, { type, payload }) {
  switch(type) {
    case GAME_END:
      return payload;
    default:
      return state;
  }
}