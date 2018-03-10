import { GAME_NEW, WORDS_LOAD } from './reducers';
import { words } from './pokemonNames';

export function loadWords() {
  return {
    type: WORDS_LOAD,
    payload: words
  };
} 

export function newGame() {

}