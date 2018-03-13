export const PLAYER_SET = 'PLAYER_SET';

export function player(state = '', { type, payload }) {
  switch(type) {

    case PLAYER_SET:
      return payload;

    default:
      return state;
  }
}