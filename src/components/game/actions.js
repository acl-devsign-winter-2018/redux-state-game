import pokemonApi from '../../services/pokemonApi';
import { GAME_NEW, GAME_END } from './reducers';

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

export function endGame(player, score) {
  return {
    type: GAME_END,
    payload: {
      player,
      score
    }
  };
}