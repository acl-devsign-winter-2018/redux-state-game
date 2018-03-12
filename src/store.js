import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import { initialState, gameReducer } from './components/app/reducers';
// import { expensesByCategory } from './components/expenses/reducer';
import thunk from 'redux-thunk';
import { game } from './components/app/reducers';


// combine reducer
const reducer = combineReducers({
  game
});

// extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create store
const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk) 
  ));

export default store;