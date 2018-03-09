import { createStore, combineReducers } from 'redux';
import { letter as guesses } from '../components/letters/reducers';

const reducer = combineReducers({
  guesses
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() 
);

export default store;