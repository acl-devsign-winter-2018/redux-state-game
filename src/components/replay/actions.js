import { OUTCOME_SET } from './reducers';


export function setOutcome(outcome) {
  return {
    type: OUTCOME_SET,
    payload: outcome
  };
}