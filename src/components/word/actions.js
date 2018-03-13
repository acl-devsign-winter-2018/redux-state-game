import { WORDS_LOAD,  COUNT_UPDATE } from './reducers';
import { words } from './pokemonNames';

export function loadWords() {
  return {
    type: WORDS_LOAD,
    payload: words
  };
} 

export function updateCorrect() {
  return {
    type: COUNT_UPDATE,
    payload: 1
  };
}
