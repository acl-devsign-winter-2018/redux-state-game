import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import game from '../components/app/reducers';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  game
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

export default store;