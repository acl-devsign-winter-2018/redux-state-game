import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { initialState, gameReducer } from './components/app/reducers';
// import { expensesByCategory } from './components/expenses/reducer';
import thunk from 'redux-thunk';
import { game, gameLoad } from '../components/app/reducers';
import promiseMiddleware from './promiseMiddleware';

// combine reducer
const reducer = combineReducers({
  game,
  gameLoad
});

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      thunk,
      promiseMiddleware
    ) 
  ));

// window.onbeforeunload = () => {
//   const { gameLoad } = store.getState();
//   // window.localStorage.players = players;
//   window.localStorage.games = JSON.stringify(gameLoad);
// };

export default store;