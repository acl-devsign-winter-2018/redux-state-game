import { get, post } from './request';
import { config } from './firebase';

const URL = `http://${config.projectId}.firebaseio.com`;
const SOME_URL = `${URL}/some.json`;

export const getAll = () => get(SOME_URL);
export const save = game => post(SOME_URL, game);
