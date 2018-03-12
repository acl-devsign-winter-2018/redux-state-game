import { WORDS_LOAD,  COUNT_UPDATE } from './reducers';
import { words } from '../app/pokemonNames';

export function loadWords() {
  return {
    type: WORDS_LOAD,
    payload: words
  };
} 

export function updateCorrect() {
  console.log('fired');
  return {
    type: COUNT_UPDATE,
    payload: 1
  };
}
