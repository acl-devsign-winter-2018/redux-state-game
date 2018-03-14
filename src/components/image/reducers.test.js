import { image, text } from './reducers';
import { GAME_NEW } from '../game/reducers';


describe('App reducer tests', () => {

  const sample = {
    image: {
      sprites: {
        front_default: 'test image'
      }
    },
    text: {
      flavor_text_entries: [{ 
        language: { 
          name: 'not'
        },
        flavor_text: 'not this' 
      },
      { 
        language: { 
          name: 'en'
        },
        flavor_text: 'test text' 
      }]
    }
  };

  it('sets new image', () => {
    const state = image('first image', { type: GAME_NEW, payload: sample });
    expect(state).toBe('test image');
  });

  it('sets new text', () => {
    const state = text('text', { type: GAME_NEW, payload: sample });
    expect(state).toBe('test text');
  });
});