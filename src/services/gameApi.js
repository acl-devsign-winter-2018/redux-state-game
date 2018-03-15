import { db } from './firebase';

const scoresRef = db.ref('scores').orderByChild('score').limitToLast(5);

export const onScoresList = handler => {
  scoresRef.on('value', data => {
    const scores = data.val();
    if(!scores) return [];

    const scoresSorted = Object.keys(scores).map(key => {
      const score = scores[key];
      score.key = key;
      return score;
    });
    scoresSorted.sort((a, b) => b.score - a.score);

    handler(scoresSorted);
  });
};