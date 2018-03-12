export const GAME_NEW = 'GAME_NEW';
// export const ERROR_CLEAR = 'ERROR_CLEAR';
export const LOAD_START = 'LOAD_START';
export const LOAD_END = 'LOAD_END';
export const ERROR = 'ERROR';

export function word(state = '', { type, payload }) {
  switch(type) {
    case GAME_NEW:
      return payload.word;
    default:
      return state;
  }
}

export function loading(state = false, { type }) {
  switch(type) {
    case LOAD_START:
      return true;
    case LOAD_END: 
      return false;
    default:
      return state;
  }
}

const initialErrorState = null;

export function error(state = initialErrorState, { type, payload }) {
  switch(type) {
    case ERROR: 
      return payload;
    case LOAD_START:
      return initialErrorState;
    default: 
      return state;
  }
}