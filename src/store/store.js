import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { letter as guesses } from '../components/letters/reducers';
import { word, words } from '../components/word/reducers';
import { image, text } from '../components/image/reducers';

const reducer = combineReducers({
  guesses,
  word,
  words,
  image,
  text
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