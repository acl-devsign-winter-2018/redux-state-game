import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { letter as guesses } from '../components/letters/reducers';
import { word, words } from '../components/word/reducers';

const reducer = combineReducers({
  guesses,
  word,
  words
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk
    ) 
  )
);

export default store;