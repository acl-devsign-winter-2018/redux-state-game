import { PLAYER_SET } from './reducers';

export function setPlayer(player) {
  return {
    type: PLAYER_SET,
    payload: player
  };
}