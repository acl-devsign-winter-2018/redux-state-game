export const GAME_NEW = 'GAME_NEW';

export function word(state = '', { type, payload }) {
  switch(type) {
    case GAME_NEW:
      return payload.word;
    default:
      return state;
  }
}
