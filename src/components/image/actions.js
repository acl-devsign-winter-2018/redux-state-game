import { IMAGE_GET, TEXT_GET, } from './reducers';
import pokemonApi from '../../services/pokemonApi';

export function getPokemonImage() {
  return (dispatch, getState) => {
    const { word } = getState();
    dispatch({
      type: IMAGE_GET,
      payload: pokemonApi.getPokemonImage(word)
    });
  };
}

export function getPokemonText() {
  return (dispatch, getState) => {
    const { word } = getState();
    dispatch({
      type: TEXT_GET,
      payload: pokemonApi.getPokemonText(word)
    });
  };
}