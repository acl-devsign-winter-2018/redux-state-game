export const PLAYER = 'PLAYER';
export const NEW = 'NEW';
export const WIN = 'WIN';

export function player(state = [], { type, payload }) {
  switch(type) {
    case PLAYER: {

    }

    case NEW: {
      return [];
    }

    default:
      return state;
  }
}

export function winner(state = null, { type, payload }) {
  switch(type) {
    case WIN:
      return payload;

    case NEW:
      return null;
    
    default:
      return state;
  }
}