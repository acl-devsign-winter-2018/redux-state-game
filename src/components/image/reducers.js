export const IMAGE_GET = 'IMAGE_GET';
export const TEXT_GET = 'TEXT_GET';

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
    case IMAGE_GET:
      return payload.sprites.front_default;
    default:
      return state;
  }
}

export function text(state = '', { type, payload }) {
  switch(type) {
    case TEXT_GET:
      return findEnglishText(payload.flavor_text_entries);
    default: 
      return state;
  }
}