import { SCORES_LOAD } from '../game/reducers';

export function loadLeaderboard() {
  const payload = localStorage.scores ? JSON.parse(localStorage.scores) : [];

  return {
    type: SCORES_LOAD,
    payload
  };
}