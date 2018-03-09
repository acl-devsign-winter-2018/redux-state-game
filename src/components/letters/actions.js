import { LETTER_GUESS } from './reducers';

export function guessLetter(guess) {
  return {
    type: LETTER_GUESS,
    payload: guess
  };
}