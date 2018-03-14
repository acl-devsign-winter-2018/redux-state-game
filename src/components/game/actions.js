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

export function endGame(outcome) {
  return (dispatch, getState) => {
    const { player, incorrect, correct } = getState();

    const score = (correct * 10) - (incorrect * 5);
    const newRef = scoresRef.push();
    const scoreToSave = {
      player,
      score,
      outcome
    };

    newRef.set(scoreToSave).then(()=>{
      dispatch({
        type: GAME_END,
        payload: outcome
      });
    });

  };
}