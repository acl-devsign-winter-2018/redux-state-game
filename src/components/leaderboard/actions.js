import { SCORES_LOAD } from '../game/reducers';
import { db } from '../../services/firebase';

const scoresRef = db.ref('scores').orderByChild('score').limitToLast(5);
let listening = false;

export function loadLeaderboard() {

  return dispatch =>  {
    if(listening) return;
    listening = true;

    scoresRef.on('value', data => {
      const scores = data.val();
      if(!scores) return [];
  
      const scoresSorted = Object.keys(scores).map(key => {
        const match = scores[key];
        match.key = key;
        return match;
      });
      scoresSorted.sort((a, b) => b.score - a.score);

      dispatch({
        type: SCORES_LOAD,
        payload: scoresSorted
      });
    });

  };
}