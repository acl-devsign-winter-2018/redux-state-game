import { GAME_NEW, WORDS_LOAD } from './reducers';
import { words } from './pokemonNames';

function getRandomWord(words) {
  return words[Math.floor(Math.random() * words.length)].toLowerCase();
}

export function loadWords() {
  return {
    type: WORDS_LOAD,
    payload: words
  };
} 

export function newGame() {
  return (dispatch, getState) => {
    const { words } = getState();
    const word = getRandomWord(words);
    dispatch({ type: GAME_NEW, payload: word });
  };
}