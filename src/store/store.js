import { createStore, combineReducers } from 'redux';
import { letter } from '../letters/reducers';

const reducer = combineReducers({
  letter
});


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() 
);

export default store;