export const GAME_NEW = 'GAME_NEW';
export const GAME_END = 'GAME_END';


export function word(state = '', { type, payload }) {
  switch(type) {
    case GAME_END:
      return payload;

    case GAME_NEW:
      return payload.word;
      
    default:
      return state;
  }
}
