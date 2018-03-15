import { get, post } from './request';
import { config } from './firebase';

const URL = `https://${config.projectId}.firebaseio.com`;
const GAMES_URL = `${URL}/games.json`;
const PLAYERS_URL = `${URL}/players.json`;
