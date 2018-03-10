import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { letter as guesses } from '../components/letters/reducers';
import { game, words } from '../components/app/reducers';

const reducer = combineReducers({
  guesses,
  game,
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