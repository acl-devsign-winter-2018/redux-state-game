import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { letter as guesses, incorrect } from '../components/letters/reducers';
import { loading, error } from '../components/app/reducers';
import { words, correct } from '../components/word/reducers';
import { image, text } from '../components/image/reducers';
import { word, scores, gameResult } from '../components/game/reducers';
import { player } from '../components/player/reducers';
import { user } from '../components/auth/reducers';

const reducer = combineReducers({
  user,
  guesses,
  word,
  words,
  image,
  text,
  loading,
  error,
  correct,
  incorrect,
  player,
  scores,
  gameResult
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    ) 
  )
);

export default store;