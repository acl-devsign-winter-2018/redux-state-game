export const OUTCOME_SET = 'OUTCOME_SET';

export function outcome(state = '', { type, payload }) {
  switch(type) {
    case OUTCOME_SET:
      return payload;
    default:
      return state;
  }
}