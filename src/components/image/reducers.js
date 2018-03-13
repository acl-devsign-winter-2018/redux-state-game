import { GAME_NEW } from '../game/reducers';

function findEnglishText(list) {
  let engEntry;
  for(let i = (list.length - 1); i > 0; i--) {
    if(list[i].language.name == 'en') { //if the name of that entry is english
      engEntry = list[i].flavor_text; //set it and return it
      break;
    }
  }
  return engEntry;
}

export function image(state = '', { type, payload }) {
  switch(type) {
    case GAME_NEW:
      return payload.image.sprites.front_default;
    default:
      return state;
  }
}

export function text(state = '', { type, payload }) {
  switch(type) {
    case GAME_NEW:
      return findEnglishText(payload.text.flavor_text_entries);
    default: 
      return state;
  }
}