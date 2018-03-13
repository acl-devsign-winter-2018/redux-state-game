import { config } from './firebase';
import { get, post } from './request';

const URL = 'https://pokeapi.co/api/v2';
const URL2 = `https://${config.projectId}.firebaseio.com`;
const SCORES_URL = `${URL2}/scores.json`;

export const getScores =  () => get(SCORES_URL);

export const saveScore = score => post(SCORES_URL, score);

const getPokemonImage = (pokemon) => get(`${URL}/pokemon/${pokemon}`);

const getPokemonText = (pokemon) => get(`${URL}/pokemon-species/${pokemon}`);

export default {
  getPokemonImage,
  getPokemonText
};