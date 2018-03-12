import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from './promiseMiddleware';
import { letter as guesses } from '../components/letters/reducers';
import { word, loading, error } from '../components/app/reducers';
import { words, correct } from '../components/word/reducers';
import { image, text } from '../components/image/reducers';
import { outcome } from '../components/replay/reducers';

const reducer = combineReducers({
  guesses,
  word,
  words,
  image,
  text,
  loading,
  error,
  outcome,
  correct
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