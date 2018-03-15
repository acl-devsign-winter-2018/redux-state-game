import { LETTER_GUESS, INCORRECT_UPDATE } from './reducers';

export function guessLetter(guess) {
  return {
    type: LETTER_GUESS,
    payload: guess
  };
}

export function updateIncorrect() {
  return {
    type: INCORRECT_UPDATE,
    payload: 1
  };
}
