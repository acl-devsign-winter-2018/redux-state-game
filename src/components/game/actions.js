import pokemonApi from '../../services/pokemonApi';
import { GAME_NEW, GAME_END } from './reducers';
import { db } from '../../services/firebase';

const scoresRef = db.ref('scores');

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)].toLowerCase();
}

export function newGame() {
  return (dispatch, getState) => {
    const { words } = getState();
    const word = getRandomWord(words);

    dispatch({
      type: GAME_NEW,
      payload: Promise.all([
        word,
        pokemonApi.getPokemonImage(word),
        pokemonApi.getPokemonText(word)
      ])
        .then(([word, image, text]) => ({ word, image, text }))
    });
  };
}

export function endGame(player, score, outcome) {

  return dispatch => {
    const newRef = scoresRef.push();
    const scoreToSave = {
      player,
      score,
      outcome
    };

    // return dispatch({
    //   type: MATCH_END,
    //   payload: newRef.set(match).then(() => {
    //     match.key = newRef.key;
    //     return match;
    //   })
    // });
    newRef.set(scoreToSave).then(()=>{
      scoreToSave.key = newRef.key;
      dispatch({
        type: GAME_END,
        payload: outcome
      });
    });

  };
}