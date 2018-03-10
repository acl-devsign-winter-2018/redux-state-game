import { WORDS_LOAD } from './reducers';
import { words } from '../app/pokemonNames';

export function loadWords() {
  return {
    type: WORDS_LOAD,
    payload: words
  };
} 
