const URL = 'https://pokeapi.co/api/v2';
import { get } from './request';

const getPokemonImage = (pokemon) => get(`${URL}/pokemon/${pokemon}`);

const getPokemonText = (pokemon) => get(`${URL}/pokemon-species/${pokemon}`);

export default {
  getPokemonImage,
  getPokemonText
};