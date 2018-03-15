import { SCORES_LOAD } from '../game/reducers';
import { onScoresList } from '../../services/gameApi';

let listening = false;

export function loadLeaderboard() {

  return dispatch =>  {
    if(listening) return;
    listening = true;

    onScoresList(scoresSorted => {
      dispatch({
        type: SCORES_LOAD,
        payload: scoresSorted
      });
    });
  };
}